import { Component, OnInit } from '@angular/core';
import { Car } from './shared/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit 
{
  car : Car[];
  selectedCar : Car;

  constructor() 
  {

  }

  ngOnInit() 
  {
    
  }

}
