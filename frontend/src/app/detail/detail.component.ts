import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../model/personne';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
personne!:any;
  constructor(
    private service:ApiserviceService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ) { }
  getparamId:any;

  ngOnInit() {
//this.getparamId=this.router.snapshot.get('id');
this.activatedRoute.params.subscribe(
  (params)=>{
this.service.getPersonneById(params.id).subscribe(
  (resp)=>{
    this.personne=resp.data;
    console.log(resp,'details de la personne');
  }
);
  }
); 
  }
  //deleted
  successMsg:any;

deletePersonnebyId(id:any)
{
  // console.log(id,'del id');
  this.service.deletePersonne(id).subscribe(
    (response)=>{
      const link=['cv'];
      this.successMsg=response.message;
        this.router.navigate(link);
      // console.log(response,'person deleted');
    },
    (error)=>{
      console.log(error);
    }
  )
}

updatePersonne(id:any){
  const link=['cv/updateCv',id];
  this.router.navigate(link);
}
}
