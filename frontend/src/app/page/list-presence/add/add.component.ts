import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddPrenceComponent implements OnInit {


  constructor(private student:ListService) { }
  addStudent = new FormGroup({ 
    prenom : new FormControl(''),
    nom : new FormControl(''),
    age : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    genre : new FormControl(''),
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
