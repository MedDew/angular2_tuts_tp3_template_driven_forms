import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APPCONFIG } from './app.config';
import { CarsModule } from './cars/cars.module';
//import { ForbiddenBrandValidatorDirective } from './cars/shared/forbidden-brand-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    //ForbiddenBrandValidatorDirective
  ],
  imports: [
    BrowserModule,
    CarsModule,
    HttpModule
  ],
  providers: [{provide : APPCONFIG, useValue : APPCONFIG.API_URL}],//APPCONFIG
  bootstrap: [AppComponent]
})
export class AppModule { }
