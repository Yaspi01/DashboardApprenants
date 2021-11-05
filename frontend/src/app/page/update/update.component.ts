import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private student:ListService, private route : ActivatedRoute) { }
  UpdateStudent = new FormGroup({ 
    nom : new FormControl(''),
    email : new FormControl(''),
  }

  );

  ngOnInit(): void {
    this.student.getStudentById(this.route.snapshot.params.id).subscribe((result: any)=>{
      this.UpdateStudent = new FormGroup({ 
        nom : new FormControl(result['nom']),
        email : new FormControl(result['email']),
      }
    
      );
    
    })
  }
  UpdateData(){
    // console.log(this.addStudent.value);
    this.student.updateStudentData(this.route.snapshot.params.id,this.UpdateStudent.value).subscribe((result: any)=>{
      console.log(result);
    })

  }

}
