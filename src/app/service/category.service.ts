import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }
  //view category
  public categories(){
    return this.http.get(`${environment.ADMIN_SERVICE_URL}/category/`)
  }
  //add new category
  public addCategory(category:any){
    return this.http.post(`${environment.ADMIN_SERVICE_URL}/category/`,category)
  }

  //delete category
  public deleteCategory(categoryId:any){
    return this.http.delete(`${environment.ADMIN_SERVICE_URL}/category/${categoryId}`);
  }

  //get category based on category id
  public getCategory(categoryId:any){
    return this.http.get(`${environment.ADMIN_SERVICE_URL}/category/${categoryId}`)
  }

  //update category
  public updateCategory(categoryData:any){
    return this.http.put(`${environment.ADMIN_SERVICE_URL}/category/`,categoryData)
  }
}
