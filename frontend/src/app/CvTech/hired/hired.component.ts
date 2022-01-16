import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { HiredService } from '../hired.service';

@Component({
  selector: 'app-hired',
  templateUrl: './hired.component.html',
  styleUrls: ['./hired.component.css']
})
export class HiredComponent implements OnInit {
hired!:Personne[] ;
  constructor(private hiredService: HiredService) { }

  ngOnInit(): void {
    this.hired=this.hiredService.getHired();
  }


}
