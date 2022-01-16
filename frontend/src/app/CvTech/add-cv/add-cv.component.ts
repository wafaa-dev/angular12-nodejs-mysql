import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
errorMessage='';
  constructor(
    private service:ApiserviceService,
    private router:Router,
  ) { }
  ngOnInit() {
  }

// addPersonne(form: NgForm){
//   this.service.addPersonne(form.value).subscribe(
//     (response)=>{
//    const link=['cv'];
// this.router.navigate(link);
//     },
//     (error)=>{
//      this.errorMessage='server cnx problem';
//      console.log(error);
//     }
//   );
cvSubmit(form: NgForm){
  this.service.addPersonne(form.value).subscribe(
    (response)=>{
   const link=['cv'];
this.router.navigate(link);
// form.reset();
    },
    (error)=>{
     this.errorMessage='server cnx problem';
     console.log(error);
    }
  );
}
}
