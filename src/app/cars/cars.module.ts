import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarCreateComponent } from '../car-create/car-create.component';
import { FormsModule } from '@angular/forms';
//import { ForbiddenBrandValidatorDirective } from './shared/forbidden-brand-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CarsComponent, CarCreateComponent],//ForbiddenBrandValidatorDirective
  exports: [CarsComponent, CarCreateComponent]
})
export class CarsModule { }
