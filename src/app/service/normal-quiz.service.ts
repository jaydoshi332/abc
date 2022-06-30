import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NormalQuizService {

  constructor(private http:HttpClient) { }
  //get quiz data
  public quizzes(){
    return this.http.get(`${environment.NORMAL_SERVICE_URL}/quiz/`);
  }
  // get all quiz of a category
  public getQuizBasedOnCategory(categoryId:any){
    return this.http.get(`${environment.NORMAL_SERVICE_URL}/quiz/category/${categoryId}`);
  }

  //get the single quiz based on quizId
  public getSingleQuiz(quizId:any){
    return this.http.get(`${environment.NORMAL_SERVICE_URL}/quiz/${quizId}`);
  }
}
