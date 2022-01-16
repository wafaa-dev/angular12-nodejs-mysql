import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/model/personne';
import { HiredService } from '../hired.service';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()personne!: Personne;
  constructor(
    private hiredService:HiredService ,
    private router:Router,
    private service:ApiserviceService

    ) { }

  ngOnInit(): void {
  }
    hire(){
      this.hiredService.hire(this.personne)
  };
  more(){
    const link=['cv',this.personne.id];
    this.router.navigate(link);
  }

}
