import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authservice:AuthService,
    private router:Router,
   ) { }

  ngOnInit(): void {
  }
login(credentials:any){
  console.log(credentials);
  this.authservice.login(credentials).subscribe(
   (resp)=>{ 
          console.log(resp);
    //  const token='test';
     const token=resp.id;
     localStorage.setItem('token',token);
     const link=['cv'];
     this.router.navigate(link);
   }
  )
}
}
