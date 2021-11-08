import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  url='http:/localhost:8080/presence';

  constructor(
    private http : HttpClient) { }
    savePresence(data:any){
      return this.http.post(this.url+"/savePresence", data);
    }

  public dateInterval(dateDebut:any,dateFin:any){
    return this.http.get(this.url+"/listByIntervale/dateDebut="+dateDebut+"&dateFin="+dateFin)
  }

  public ajoutPresence(presence: any){
    this.http.post(this.url+'/add',presence).subscribe(data=>{
      console.log('success')
    })
  }
    // getPresenceByDay()

    // intervall(datedebut:any, datefin:any){
    //   return this.http.get(`${this.url+"listByIntervale"}/${dateDebut={debut}&dateFin={fin}"}`)
    // }
}
