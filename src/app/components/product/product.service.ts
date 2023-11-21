import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _http=inject(HttpClient);
  constructor(
    //private _http: HttpClient
  ) { }

  getProducts():Observable<any> {
    return this._http.get('http://localhost:3000/products');
  }
  deleteProduct(_id: string):Observable<any> {
    return this._http.delete(`http://localhost:3000/products/${_id}`);
  }
}
