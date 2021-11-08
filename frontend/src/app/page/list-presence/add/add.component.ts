import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import {PresenceService} from "../../../services/presence.service";
import {UtilisateurService} from "../../../services/utilisateur.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddPrenceComponent implements OnInit {


  don: any
  userD: any
  constructor( private list: ListService,
               private presence: PresenceService,
               private user: UtilisateurService
               ) { }
  listData : any=[]
  ngOnInit(): void {
    this.list.getAllStudent().subscribe((allData)=>{
      console.log (allData);
      return this.listData=allData;
    });

  }

  addPresence(user: any){
    const donnee = this.user.singleUser(user).subscribe(data=>{
      this.don = data;
      this.userD = {"users": this.don}
      console.log(this.userD)
      this.presence.ajoutPresence(this.userD)
    })
  }
/*addStudent = new FormGroup({
  prenom : new FormControl(''),
  nom : new FormControl(''),
  age : new FormControl(''),
  email : new FormControl(''),
  password : new FormControl(''),
  genre : new FormControl(''),
}*/

}
