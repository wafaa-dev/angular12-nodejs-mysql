import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';
// import { CvService } from '../cv.service';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
}) 

export class CvComponent implements OnInit {
  
  personnes: Personne[]=[];
  selectedPerson!:Personne;
constructor(
  // private cvService:CvService,
  private service:ApiserviceService,
)
{}
ngOnInit():void {
  this.service.getPersonne().subscribe(
     (personnes)=>{
       this.personnes=personnes;
       console.log(personnes)
     },
     (error)=>{
alert('can`t access to database');
console.log(error);
// this.personnes=this.service.getFakePersonnes();
}
  );
   }
 selectPerson(personne: Personne): void{
     this.selectedPerson=personne;
}
}


