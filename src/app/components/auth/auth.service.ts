import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserI } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http=inject(HttpClient)
  constructor() { }

  login(user:UserI){
    return this._http.post('http://localhost:3000/auth/login',user)
  }
}
