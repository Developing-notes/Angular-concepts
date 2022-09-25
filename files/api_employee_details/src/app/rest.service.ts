import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/Users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpwork : HttpClient) { }  
  //httpwork//
  public url : string  = "http://localhost:8000/Users"; 
  //call datatypefile//
  getUsers()
  {
    return this.httpwork.get<Users[]>(this.url);
  }
}
 