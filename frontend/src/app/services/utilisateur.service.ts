import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  url : string = "localhost:8080/user"
  constructor(private http: HttpClient) { }

  singleUser(id: any){
    return this.http.get(this.url+"/getOne/"+id)
  }

  listFormateur(profil: any){
    return this.http.get(this.url+'/users/'+profil)
  }

  listApprenant(profil: any){
    return this.http.get(this.url+'/users/'+profil)
  }
}
