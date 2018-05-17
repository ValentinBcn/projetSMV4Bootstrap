import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()

export class AuthentificationService {
  urlPost  = "http://smartmarina.marge-labo.com/wp-json";
  constructor(private _http: Http) { }

  sendRequest(a: string,b: string){
    return this._http.post(this.urlPost+ '/jwt-auth/v1/token', {
      username: a,
      password: b
    })
    
  }
}
