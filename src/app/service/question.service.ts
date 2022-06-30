import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {
  }

//get all question for admin purpose no constarint
  public getQuestionsOfQuiz(quizId: any) {
    return this.http.get(`${environment.ADMIN_SERVICE_URL}/question/questionAll/${quizId}`)
  }
//get all question for normal user purpose
  public getQuestionsOfQuizForNormal(quizId: any) {
    return this.http.get(`${environment.ADMIN_SERVICE_URL}/question/quiz/${quizId}`)
  }

  // add question
  public addQuestion(question: any) {
    return this.http.post(`${environment.ADMIN_SERVICE_URL}/question/`, question);
  }

  //delete question
  public deleteQuestion(questionId:any){
    return this.http.delete(`${environment.ADMIN_SERVICE_URL}/question/${questionId}`);
  }

  public getQuestionBasedOnQuestionId(questionId: any) {
    return this.http.get(`${environment.ADMIN_SERVICE_URL}/question/${questionId}`);
  }

  public updateQuestion(question: any) {
    return this.http.put(`${environment.ADMIN_SERVICE_URL}/question/`,question);
  }
}
