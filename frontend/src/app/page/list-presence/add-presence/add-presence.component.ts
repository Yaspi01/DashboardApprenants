import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PresenceService } from 'src/app/services/presence.service';

@Component({
  selector: 'app-add-presence',
  templateUrl: './add-presence.component.html',
  styleUrls: ['./add-presence.component.css']
})
export class AddPresenceComponent implements OnInit {

  constructor(private presence:PresenceService) { }
  addPresence = new FormGroup({
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

  savePresence(){
    // console.log(this.addStudent.value);
    // this.presence.saveStudentData(this.addStudent.value).subscribe((result)=>{
    //   console.log(result);
  //   })
  // }
  }
}
