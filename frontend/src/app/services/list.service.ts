import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  url='http://localhost:8080/user';


  constructor(
    private http : HttpClient) { }
    getAllStudent(){
      return this.http.get(this.url+"/getAll");
    }
    saveStudentData(data: any){
      console.log(data);
      return this.http.post(this.url+"/save", data);
    }
    deleteStudent ( id: any){
      return this.http.delete(`${this.url+"/delete"}/${id}`);
    }
    getStudentById(id: number){
      return this.http.get(`${this.url+"/getOne"}/${id}`);
    }
    updateStudentData(id: number,data : any){
      return this.http.put(`${this.url+"/update"}/${id}`,data);
    }


}
