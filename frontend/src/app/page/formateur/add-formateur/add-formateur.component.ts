import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  constructor(private service:FormateurService) { }
  addFormateur = new FormGroup({ 
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
    this.service.saveFormateurData(this.addFormateur.value).subscribe((result)=>{
      console.log(result);
    })
  }

}
