import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landingdata',
  templateUrl: './landingdata.component.html',
  styleUrls: ['./landingdata.component.scss']
})
export class LandingdataComponent implements OnInit {
  private ELEMENT_DATA;
  private baseUrl = `http://kalpesh.atul/deskera/index.php`;
  constructor(private httpClient: HttpClient) {}
  displayedColumns: string[] = [
    'id',
    'country',
    'alpha2code',
    'alpha3code',
    'domain',
    'phoneno',
    'currency'
  ];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getCountry().subscribe((data: any) => {
      // console.log(data.response);
      this.dataSource = new MatTableDataSource<PeriodicElement>(data.response);
    });
    this.dataSource.paginator = this.paginator;
  }

  getCountry(): Observable<PeriodicElement[]> {
    return this.httpClient.get<PeriodicElement[]>(
      this.baseUrl + '/lead/getlead'
    );
  }
}

export interface PeriodicElement {
  id: string;
  country: string;
  alpha2code: string;
  alpha3code: string;
  domain: string;
  phoneno: string;
  currency: string;
}

