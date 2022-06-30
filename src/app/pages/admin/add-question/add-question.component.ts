import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../service/question.service";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";
// @ts-ignore
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public Editor=ClassicEditor;
  quizId:any;
  quizTitle:any;
  question:any={
    quiz:{
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  }
  constructor(private activatedRoute:ActivatedRoute,private questionService:QuestionService) { }

  ngOnInit(): void {
    this.quizId= this.activatedRoute.snapshot.params['quizId'];
    this.quizTitle=this.activatedRoute.snapshot.params['title'];
    console.warn(this.quizId);
    console.warn(this.quizTitle);
    this.question.quiz['quizId']=this.quizId;
  }

  public formSubmit(addQuestionForm:NgForm){
    this.questionService.addQuestion(this.question).subscribe(
      (data:any)=>{
        Swal.fire('success','Question Added Successfully','success').then((e)=>{
          addQuestionForm.resetForm();
          addQuestionForm.form.markAsPristine();
        })
      },error => {
        Swal.fire('error!!','Something went wrong','error');
        console.warn(error)
      }
    );

  }

}
