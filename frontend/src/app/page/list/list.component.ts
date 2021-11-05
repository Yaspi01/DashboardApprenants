import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  constructor( private list: ListService) { }
  listData : any=[]
  ngOnInit(): void {
    this.list.getAllStudent().subscribe((allData)=>{
      console.log (allData);
      return this.listData=allData;
    });
   
  }  
  deleteStudent(student_id : any){
    this.list.deleteStudent(student_id).subscribe((result)=>{ 
    // console.log(result))
    this.ngOnInit()
    });
  }
}

