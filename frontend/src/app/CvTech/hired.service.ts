import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class HiredService {
private hired:Personne[];
  constructor() {
    this.hired=[];
   }
   getHired():Personne[]{
     return this.hired;
   }
  hire(pers:Personne):void{
    const index=this.hired.indexOf(pers);
      if (index<0){
    this.hired.push(pers);
      }else{
        alert("this person is already hired");

      }
  }
  fire(pers: Personne):void{
    const index=this.hired.indexOf(pers);
      if (index>=0){
    this.hired.splice(index,1);
      }
      
  }
}
