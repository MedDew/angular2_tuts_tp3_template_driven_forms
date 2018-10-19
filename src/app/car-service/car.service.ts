import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { APPCONFIG } from '../app.config';
import { Car } from '../cars/shared/car.model';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CarService 
{

  constructor(private http : Http, @Inject(APPCONFIG) private apiURL) 
  { 

  }

  postCar(car: Car)//, onNext : (car: Car) => void
  {
    let headers = new Headers({
      "Accept" : "application/json",
      "Content-Type" : "application/json",
    });
    let requesOptions = new RequestOptions({headers : headers});

    return this.http.post(`${this.apiURL}/cars`, JSON.stringify(car), requesOptions);
    //.map((response) => <Car>response.json());
    //.subscribe(onNext, error => console.log("An error occured when posting : "+this.apiURL+"/cars with "+car.getId()));
  }
}
