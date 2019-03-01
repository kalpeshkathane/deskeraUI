import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandinpageComponent } from './landinpage/landinpage.component';
import { LandingdataComponent } from './components/landingdata/landingdata.component';

const routes: Routes = [
  {path : '', component : LandinpageComponent},
  {path : 'leaddata', component : LandingdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
