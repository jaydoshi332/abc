import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class CategoryNormalService {

  constructor(private http:HttpClient) { }
  public categories(){
    return this.http.get(`${environment.NORMAL_SERVICE_URL}/category/`)
  }
}
