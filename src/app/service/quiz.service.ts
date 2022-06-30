import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http:HttpClient) { }

  //get quiz data
  public quizzes(){
    return this.http.get(`${environment.ADMIN_SERVICE_URL}/quiz/`);
  }

  //add quiz
  public addQuiz(quizData:any){
    return this.http.post(`${environment.ADMIN_SERVICE_URL}/quiz/`,quizData);
  }


  //delete quiz
  public deleteQuiz(quizId:any){
    return this.http.delete(`${environment.ADMIN_SERVICE_URL}/quiz/${quizId}`);
  }

  //get the single quiz based on quizId
  public getSingleQuiz(quizId:any){
    return this.http.get(`${environment.ADMIN_SERVICE_URL}/quiz/${quizId}`);
  }

  //update quiz
  public updateQuiz(quizData:any){
    return this.http.put(`${environment.ADMIN_SERVICE_URL}/quiz/`,quizData)
  }

  // get all quiz of a category
  public getQuizBasedOnCategory(categoryId:any){
    return this.http.get(`${environment.ADMIN_SERVICE_URL}/quiz/category/${categoryId}`);
  }
}
