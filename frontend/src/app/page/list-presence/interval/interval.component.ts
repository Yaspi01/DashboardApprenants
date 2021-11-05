import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PresenceService } from 'src/app/services/presence.service';
import {Router} from "@angular/router";
import {ListService} from "../../../services/list.service";

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  private data:any
  constructor(private service:PresenceService,private router:Router, private list: ListService) { }
  listData : any=[]
  interval = new FormGroup({
    dateDebut : new FormControl(''),
    dateFin : new FormControl(''),
  })


  intervalData(date:any) {
    this.service.dateInterval(date.dateDebut,date.dateFin).subscribe((data:any)=>{
      this.data = data
      if(data){
        this.router.navigateByUrl("/")
      }else{
        this.router.navigateByUrl("/")
      }
    })
  }
  ngOnInit(): void {
    this.list.getAllStudent().subscribe((allData)=>{
      console.log (allData);
      return this.listData=allData;
    });

  }

}
