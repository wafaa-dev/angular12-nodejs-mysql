import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/model/personne';
//
import { ApiserviceService } from 'src/app/apiservice.service';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input () personne!:Personne ;
@Output() selectedPerson=new EventEmitter();
 constructor(
   //
       private service:ApiserviceService

 ) { }

  ngOnInit(): void {
      

  }
selectPerson(){
  //emits the event and injects the person
this.selectedPerson.emit(this.personne);
};
}


