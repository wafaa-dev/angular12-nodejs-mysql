import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
private personnes:Personne[];
  constructor() { 
  this.personnes=[
   new Personne (1,'wafa','sakouhi',34,'www.jpg',777,'developer' ),
   new Personne (2,'cyrine','mnasria',28,'cy.png',666,'digital marketer' ),
   ];
  }
   getPersonnes():Personne[]{
   return this.personnes;
   }
   //method to find person by id
   getPersonneById(id: number){
     const personne =this.personnes.find(personne =>{
       return personne.id==id;
     });
     return personne;
   }
   addPersonne(personne:Personne):void{
     console.log(personne);
     personne.id=this.personnes[this.personnes.length-1].id+1;
     this.personnes.push(personne);
   }
}
 