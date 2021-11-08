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
    prenom : new FormControl(''),
    nom : new FormControl(''),
    age : new FormControl(''),
    email : new FormControl(''),
    telephone : new FormControl(''),
    login : new FormControl(''),
    status : new FormControl(''),
    profile : new FormControl(''),
    password : new FormControl(''),
  }

  );

  ngOnInit(): void {
    this.student.getStudentById(this.route.snapshot.params.id).subscribe((result: any)=>{
      this.UpdateStudent = new FormGroup({
          prenom : new FormControl(result['prenom']),
        nom : new FormControl(result['nom']),
          age : new FormControl(result['age']),
        email : new FormControl(result['email']),
          telephone : new FormControl(result['telephone']),
          login : new FormControl(result['login']),
          status : new FormControl(result['status']),
          profile : new FormControl(result['profile']),
          password : new FormControl(result['password']),
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
