import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  constructor(private http:HttpClient) { }

  url='http://localhost:8080/formateur';

  saveFormateurData(data: any){
    console.log(data);
    return this.http.post(this.url+"/saveFormateur", data);
  }
}
