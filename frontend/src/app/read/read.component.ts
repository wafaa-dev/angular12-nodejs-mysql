import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(
      private service:ApiserviceService
  ) { }
readData:any;
  ngOnInit(): void {
      this.service.getPersonne().subscribe((res)=>{
      // console.log(res,"show all data");
      this.readData=res.data;
    });
  }

}
