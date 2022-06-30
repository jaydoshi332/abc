import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NormalQuizService} from "../../../service/normal-quiz.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  cid:any;
  quizzes:any;
  constructor(private activatedRoute:ActivatedRoute,private normalQuizService:NormalQuizService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.cid=params['categoryId'];
      // console.warn(this.cid);
      if(this.cid=='all'){
        this.normalQuizService.quizzes().subscribe(
          (data:any)=>{
            this.quizzes=data;
            console.warn(this.quizzes);
          },error => {
            Swal.fire('error!!','Something went wrong','error');
            console.warn(error);
          }
        );
      }else{
        this.normalQuizService.getQuizBasedOnCategory(this.cid).subscribe(
          (data:any)=>{
            this.quizzes=data;
          },(error:any) => {
            Swal.fire('error!!','Something went wrong','error');
            console.warn(error);
          }
        );
      }
    });
  }
}
