import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from 'src/app/model/personne';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(
    private _http:HttpClient,
  ) {
 
   }

  //connect front to database
  apiUrl='http://localhost:3000/personne';
  
  getPersonne():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }
   getPersonneById(id: number):Observable<any>{
    return this._http.get<Personne>(this.apiUrl+`/${id}`);
   }
   addPersonne(personne:Personne):Observable<any>{
   return  this._http.post(`${this.apiUrl}`,personne);
   }
   deletePersonne(id:number):Observable<any>{
    return this._http.delete(`${this.apiUrl}`+`/${id}`);
   }
   updatePersonne(personne:Personne,id:number):Observable<any>{
     return this._http.put(`${this.apiUrl}`+`/${id}`,personne);
   }
}
