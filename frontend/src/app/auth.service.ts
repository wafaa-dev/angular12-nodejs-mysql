import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
link ='http://localhost:3000/personne/users';
  constructor(
    private _http:HttpClient,
  ) { }
  login(credentials:any):Observable<any>
  {
   return this._http.post(this.link, credentials);
  }
}
