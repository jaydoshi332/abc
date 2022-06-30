import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../service/quiz.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzess:any = []

  constructor(private quizService:QuizService) {
  }

  ngOnInit(): void {
    this.quizService.quizzes().subscribe(
      (data:any)=>{
        this.quizzess=data;
      },
      error => {
        console.warn(error);
        Swal.fire('Error','Something went wrong','error');
      }
    )
  }
  deleteQuiz(quizId:any){
    Swal.fire({
      icon:'warning',
      title:"Confirm Delete Quiz ?",
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        //delete code
        this.quizService.deleteQuiz(quizId).subscribe(
          (data:any)=>{

            Swal.fire('success!!','Quiz Deleted Successfully','success');
            this.quizzess=this.quizzess.filter((quiz:any)=>quiz.quizId!=quizId);
            console.warn(data);
          },
          error=>{
            Swal.fire('error!!','Something went wrong','error')
          });
      }
    })
  }

}
