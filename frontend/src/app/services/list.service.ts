import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  url='http://localhost:8080/api';
  

  constructor(
    private http : HttpClient) { }
    getAllStudent(){
      return this.http.get(this.url+"/listeApprenant");
    }
    saveStudentData(data: any){
      console.log(data);
      return this.http.post(this.url+"/saveApprenant", data);
    }
    deleteStudent ( id: any){
      return this.http.delete(`${this.url+"/deleteApprenant"}/${id}`); 
    }
    getStudentById(id: number){
      return this.http.get(`${this.url+"/apprenant"}/${id}`);
    }
    updateStudentData(id: number,data : any){
      return this.http.put(`${this.url+"/updateApprenant"}/${id}`,data);
    }

  
}
