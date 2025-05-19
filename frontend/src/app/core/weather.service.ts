import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor() {}

  // getWeather(city: string): Observable<any> {
  //   return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=stafford&appid=65a330b6ca81ccdd260b3d9cafa4677e&units=metric`);
  // }
}
