import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';
import { LandinpageComponent } from './landinpage/landinpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingdataComponent } from './components/landingdata/landingdata.component';

@NgModule({
  declarations: [
    AppComponent,
    LandinpageComponent,
    HeaderComponent,
    FooterComponent,
    LandingdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
