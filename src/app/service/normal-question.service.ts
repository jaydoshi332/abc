import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NormalQuestionService {

  constructor(private http:HttpClient) { }
  //get all question for normal user purpose
  public getQuestionsOfQuizForNormal(quizId: any) {
    return this.http.get(`${environment.NORMAL_SERVICE_URL}/question/quiz/${quizId}`)
  }
  public evalQuiz(questions:any){
    return this.http.post(`${environment.NORMAL_SERVICE_URL}/question/eval-quiz`,questions);
  }
}
