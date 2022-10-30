import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

const buildersAppKey = `35e97601aa7f46db672b1a4db89f7ee1`;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private lat: any;
  private lon: any;
  private city: any;
  private readonly URL_Users = `${environment.APIUsers}`;
  private readonly URL_Geocoding = `${environment.APIOpenGeocoding}`;
  private readonly URL_Weather = `${environment.APIOpenWeather}`;
  private readonly EndpointGeocoding = `${environment.APIOpenGeocoding}/data/2.5/weather?lat=`;

  getUser() {
    return this.http.get(this.URL_Users, httpOptions).pipe(take(1));
  }

  getOpenGeocoding() {
    return  this.http.get(
      this.URL_Geocoding+`/geo/1.0/direct?q=${this.city}&appid=${buildersAppKey}`,
      httpOptions
    )
      .pipe(take(1));
  }

  getOpenWeather() {
    return  this.http.get(
      this.URL_Weather+`/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${buildersAppKey}`,
      httpOptions
    )
      .pipe(take(1));
  }

  constructor(
    private http: HttpClient
  ) { }
}
