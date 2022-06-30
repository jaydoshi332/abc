import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../service/question.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  quizId:any;
  quizTitle:any;
  questions:any=[];
  constructor(private activatedRouted:ActivatedRoute,private questionService:QuestionService) { }

  ngOnInit(): void {
    this.quizId= this.activatedRouted.snapshot.params['quizId'];
    this.quizTitle=this.activatedRouted.snapshot.params['title'];
    this.questionService.getQuestionsOfQuiz(this.quizId).subscribe(
      (data:any)=>{
        this.questions=data;
        console.warn(this.questions);
      },error=>{
        Swal.fire('error!','Something went wrong','error');
      }
    )
  }

  deleteQuestion(questionId:any){
    Swal.fire({
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Delete Question?'
    }).then((result)=>{
      if(result.isConfirmed){
        this.questionService.deleteQuestion(questionId).subscribe(
          (data:any)=>{
            Swal.fire('success!!','Question Deleted Successfully','success');
            this.questions=this.questions.filter((question:any)=>question.questionId!=questionId);
          },error => {
            console.warn(error);
            Swal.fire('error!!','Something went wrong','success');
          }
        )
      }
    })
  }

}
