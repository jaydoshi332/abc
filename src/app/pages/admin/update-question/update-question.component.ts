import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {QuestionService} from "../../../service/question.service";
import {NgForm} from "@angular/forms";
// @ts-ignore
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  public Editor=ClassicEditor;
  questionId:any;
  quizTitle:any;
  quizId:any;
  question:any=[];
  constructor(private activatedRoute:ActivatedRoute,private questionService:QuestionService,private router:Router) { }

  ngOnInit(): void {
    this.questionId=this.activatedRoute.snapshot.params['questionId'];
    this.quizTitle=this.activatedRoute.snapshot.params['title'];
    this.quizId=this.activatedRoute.snapshot.params['quizId']
    this.questionService.getQuestionBasedOnQuestionId(this.questionId).subscribe(
      (data:any)=>{
        this.question=data;
        console.warn(this.question);
      },error => {
        Swal.fire('error!!','Something went wrong','error');
        console.log(error);
      }
    )
  }
  formSubmit(quizForm: NgForm) {
    this.questionService.updateQuestion(this.question).subscribe(
      (data:any)=>{
        Swal.fire("success!!","Category Updated Successfully",'success').then((e)=>{
          this.router.navigate([`/admin/view-questions/${this.quizId}/${this.quizTitle}`]);
        });
        console.warn(data);
      },
      error => {
        Swal.fire('error','Something went wrong','error');
        console.warn(error);
      }
    );
  }

}
