import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../cars/shared/car.model';
import { CarService } from '../car-service/car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit 
{
  car : Car;
  constructor(private carService: CarService) 
  {

  }

  ngOnInit()
  {
  }

  addNewCar()
  {
    this.car = new Car(0,0,0,0,"fdvvvvvvvvvvvvvvvvvvvvvvfdvvvvvvvvvvvvvvvvvvvvvv","",0);//
  }
  
  onSubmit()
  {
    let car = this.carService.postCar(this.car);//.subscribe(res => { console.log(res); location.reload()});
    car.forEach(c => console.log("POST RESULT : "+c));
  }
}
