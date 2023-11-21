import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private _http: HttpClient) { }

  getPeliculas(): Observable<any> {
    let HttpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'auth': localStorage.getItem('token') || ''
      })
    }
    return this._http.get('http://localhost:3000/peliculas',HttpOptions);
  }
  deleteMovie(id: any): Observable<any> {
    let HttpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'auth': localStorage.getItem('token') || ''
      })
    }
    return this._http.delete(`http://localhost:3000/peliculas/${id}`,HttpOptions);
  }
  createMovie(movie: any): Observable<any> {
    let HttpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'multipart/form-data',
      'auth': localStorage.getItem('token') || ''     
      })
    }
    console.log(movie);
    return this._http.post('http://localhost:3000/peliculas', movie, HttpOptions);
  }
  updateMovie( id,movie:any): Observable<any> {
    let HttpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'auth': localStorage.getItem('token') || ''
      })
    }
    return this._http.put(`http://localhost:3000/peliculas/${id}`, movie, HttpOptions);
  }
  getMovieById(id: any): Observable<any> {
    let HttpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'auth': localStorage.getItem('token') || ''
      })
    }
    return this._http.get(`http://localhost:3000/peliculas/${id}`, HttpOptions);
  }


}
