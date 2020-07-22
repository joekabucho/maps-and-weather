import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=5294651abc9af633c23fbdb326c43dbc&query=' + location
    );
  }
}
