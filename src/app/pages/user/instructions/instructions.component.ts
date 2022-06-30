import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NormalQuizService} from "../../../service/normal-quiz.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  quizId:any;
  quizzes:any;
  title:any;
  constructor(private activatedRoute:ActivatedRoute,private normalQuizService:NormalQuizService,private router:Router) { }

  ngOnInit(): void {
    this.quizId=this.activatedRoute.snapshot.params['quizId'];
    this.normalQuizService.getSingleQuiz(this.quizId).subscribe(
      (data:any)=>{
        this.quizzes=data;
        this.title=this.quizzes.title;
        console.warn(this.quizzes);
      },error => {
        Swal.fire("error!!",'Something went wrong','error');
      }
    );
  }

  startQuiz(){
    Swal.fire({
      title:'Do you want to start the quiz?',
      showCancelButton:true,
      confirmButtonText:'Start',
      icon:"info"
    }).then((result)=>{
      if(result.isConfirmed){
        this.router.navigate(['/start-quiz/'+this.quizId+'/'+this.title]);
      }else if(result.isDenied){
      }});
  }
}

