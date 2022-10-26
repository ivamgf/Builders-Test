import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const buildersAppKey = `35e97601aa7f46db672b1a4db89f7ee1`;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly configUrl = `${environment.APIUsers}`;
  private readonly configUrl2 = `${environment.APIOpenWeather}{${buildersAppKey}}`;

  getUser() {
    return this.http.get(this.configUrl, httpOptions).pipe(take(1));
  }

  getOpenWeather() {
    return  this.http.get(this.configUrl, httpOptions).pipe(take(1));
  }

  constructor(
    private http: HttpClient
  ) { }
}
