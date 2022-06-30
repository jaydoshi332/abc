import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

//  add User
  public addUser(user:any){
    return this.http.post(`${environment.AUTHORIZATION_URL}/user/`,user);

  }

}
