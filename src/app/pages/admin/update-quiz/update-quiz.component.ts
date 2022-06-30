import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../service/quiz.service";
import {CategoryService} from "../../../service/category.service";
import Swal from "sweetalert2";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  quizId = undefined
  quizBasedOnId: any = [];
  categories: any = []

  constructor(private activatedRoute: ActivatedRoute, private quizService: QuizService, private categoryService: CategoryService,private router:Router) {
  }

  ngOnInit(): void {
    this.quizId = this.activatedRoute.snapshot.params['quizId'];
    this.quizService.getSingleQuiz(this.quizId).subscribe(
      (data) => {
        this.quizBasedOnId = data;
        console.log(this.quizBasedOnId);
      }, error => {
        Swal.fire('error!!', "Something went wrong", 'error');
      }
    );
    this.categoryService.categories().subscribe(
      (data) => {
        this.categories = data;
        console.warn(this.categories);
      }, error => {
        Swal.fire('error!!', "Something went wrong", 'error');
      }
    );

  }

  formSubmit(quizForm: NgForm) {
    this.quizService.updateQuiz(this.quizBasedOnId).subscribe(
      (data:any)=>{
        Swal.fire("success!!","Quiz Updated Successfully",'success').then((e)=>{
          this.router.navigate(['/admin/quizzes']);
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
