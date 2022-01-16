import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {
  id!:number;
personne!:Personne;
  constructor(
    private activatedRoute:ActivatedRoute,
    private service:ApiserviceService,
    private router:Router,

  ) { }

  ngOnInit(){
this.personne=new Personne();
this.id=this.activatedRoute.snapshot.params['id'];
this.service.getPersonneById(this.id).subscribe(
  (resp)=>{
    this.personne=resp;
    // console.log(resp,'details de la personne');
    // console.log(resp);
  },error => console.log(error));
}

 onSubmit(){
    this.service.updatePersonne(this.personne,this.id).subscribe( data =>{
      this.goToList();
    }, error => console.log(error));
}

  goToList(){
    this.router.navigate(['/cv']);
  }

}
