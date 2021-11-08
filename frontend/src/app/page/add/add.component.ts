import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private student:ListService) { }
  addStudent = new FormGroup({
    prenom : new FormControl(''),
    nom : new FormControl(''),
    age : new FormControl(''),
    email : new FormControl(''),
      telephone: new FormControl(""),
      login : new FormControl(''),
      status : new FormControl(''),
      profile : new FormControl(''),
      password : new FormControl(''),
  }
  );

  ngOnInit(): void {
  }


  SaveData(){
    // console.log(this.addStudent.value);
    this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
      console.log(result);
    })
  }

}
