import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {QuizService} from "../../../service/quiz.service";
import Swal from "sweetalert2";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories:any=[]
  quiz={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:null
  }
  constructor(private categoryService:CategoryService,private quizService:QuizService) { }

  ngOnInit(): void {
    this.categoryService.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.warn(data);
      },error => {
        Swal.fire('error!!',"Something went wrong",'error');
      }
    );
  }
  formSubmit(quizForm:NgForm){
    this.quizService.addQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire('success!!','Quiz Added Successfully','success');
        quizForm.resetForm();
        quizForm.form.markAsPristine();

      },error=>{
        console.warn(error);
        Swal.fire('error!!','Something went wrong','error');
      }
    )

  }

}
