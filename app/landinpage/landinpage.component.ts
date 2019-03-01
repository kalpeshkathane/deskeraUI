import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Icountry } from './country';
import { Isaveform } from './savelead';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landinpage',
  templateUrl: './landinpage.component.html',
  styleUrls: ['./landinpage.component.scss']
})
export class LandinpageComponent implements OnInit {
  public countryData = [];
  countryValue: string;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string;
  callingNo: string;
  currencies: string;
  flag: string;
  topLevelDomain: string;
  topLevelDomainValue: string;
  timezones: string;
  currentTime: string;
  currenciesymbol: string;
  today = new Date();

  public ownerForm = new FormGroup({
    topLevelDomainValue: new FormControl(),
    alpha2Code: new FormControl(),
    alpha3Code: new FormControl(),
    callingNo: new FormControl(),
    currencies: new FormControl(),
    currentTime: new FormControl(),
    country: new FormControl()
  });

  private endpoint = `https://restcountries.eu/rest/v2/all`;
  private baseUrl = `http://kalpesh.atul/deskera/index.php`;

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {
    this.getCurrentCountry().subscribe((location:any) => {
       this.countryValue = location.country_code;
    });
    this.getCountry().subscribe(data => (this.countryData = data));
  }

  getCurrentCountry() {
    return this.httpClient.get('https://geoip-db.com/json/');
  }
  getCountry(): Observable<Icountry[]> {
    return this.httpClient.get<Icountry[]>(this.endpoint);
  }

  onSelect(event, country) {
    if (event.source.selected) {
      this.alpha2Code = country.alpha2Code;
      this.alpha3Code = country.alpha3Code;
      this.callingCodes = country.callingCodes[0];
      this.currencies = country.currencies[0].code;
      this.currenciesymbol = country.currencies[0].symbol;
      this.flag = country.flag;
      this.topLevelDomain = country.topLevelDomain[0];
      this.timezones = country.timezones[0];
      this.currentTime = formatDate(
        this.today,
        'dd-MM-yyyy hh:mm:ss a',
        'en-US',
        '+0530'
      );
    }
  }

  saveData = formValue => {
    const saveform: Isaveform = {
      country: formValue.country,
      domainName: formValue.topLevelDomainValue + this.topLevelDomain,
      alpha2Code: formValue.alpha2Code,
      alpha3Code: formValue.alpha3Code,
      phoneNo: this.callingCodes + formValue.callingNo,
      currency: formValue.currencies
    };
    this.httpClient
      .post<void>(this.baseUrl + '/lead/savelead', saveform)
      .subscribe((data: any) => {
        this.toastr.success('Successfully Added');
        console.log(data);
      });
  }
}
