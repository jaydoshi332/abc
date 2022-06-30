import {Component, Input, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {LocationStrategy} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {NormalQuestionService} from "../../../service/normal-question.service";

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})

export class QuizStartComponent implements OnInit {
  quizId: any;
  result: any;
  title: any;
  questions: any;
  isSubmit = false;
  timer: any;

  constructor(private normalQuestionService: NormalQuestionService, private activatedRoute: ActivatedRoute, private locationStrategy: LocationStrategy) {
  }

  ngOnInit(): void {
    this.preventBackButton();
    this.quizId = this.activatedRoute.snapshot.params['quizId'];
    this.title = this.activatedRoute.snapshot.params['title'];
    this.normalQuestionService.getQuestionsOfQuizForNormal(this.quizId).subscribe(
      (data: any) => {
        this.questions = data;
        console.warn(this.questions);
        this.timer = this.questions.length * 2 * 60;
        console.warn(this.questions);
        this.startTimer();
      }, error => {
        Swal.fire('error!!', 'Something went wrong', 'error');
      }
    );
  }

  preventBackButton() {
    history.pushState(null, 'null', location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, 'null', location.href);
    });

  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: 'info'
    }).then((e) => {
      if (e.isConfirmed) {
        this.evalQuiz()
      }
    });
  }

  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000)
  }

  getFormattedTime() {
    let hh = Math.floor(this.timer / 3600);

    let mm = Math.floor((this.timer - (3600 * hh)) / 60);

    let ss = Math.floor(this.timer - (3600 * hh) - (mm * 60));

    return `${hh} hr : ${mm} min : ${ss} sec`;
  }

  evalQuiz() {
    this.normalQuestionService.evalQuiz(this.questions).subscribe(
      data => {
        this.isSubmit = true;
        this.result = data;
        this.result.marksGot=Number(this.result.marksGot).toFixed(2);
        console.warn(this.result);
      },
      error => {
        Swal.fire("error!!", "Something went wrong!!", "error");

      }
    )
  }
  printPage(){
    window.print();
  }

}
