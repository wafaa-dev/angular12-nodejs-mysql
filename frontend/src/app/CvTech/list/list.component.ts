import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/model/personne';
//
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() personnes!: Personne[];
  @Output() selectedPerson =new EventEmitter();

  constructor(
  //
    private service:ApiserviceService
  ) { }
  //personne coming from cv comp
personne!:Personne[] ;
  ngOnInit(): void {
    this.service.getPersonne().subscribe((res)=>{
      // console.log(res,"all data");
      this.personne=res.data;
    });
    // console.log(this.personnes)
  
  }
selectPerson(selectedPerson: any){
// console.log(selectedPerson);
this.selectedPerson.emit(selectedPerson);
}
}
