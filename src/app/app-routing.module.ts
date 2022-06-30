import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/admin/dashboard/dashboard.component";
import {UserDashboardComponent} from "./pages/user/user-dashboard/user-dashboard.component";
import {AdminGuard} from "./service/admin.guard";
import {NormalGuard} from "./service/normal.guard";
import {ProfileComponent} from "./pages/profile/profile.component";
import {WelcomeComponent} from "./pages/admin/welcome/welcome.component";
import {ViewCategoriesComponent} from "./pages/admin/view-categories/view-categories.component";
import {AddCateggoryComponent} from "./pages/admin/add-categgory/add-categgory.component";
import {UpdateCategoryComponent} from "./pages/admin/update-category/update-category.component";
import {ViewQuizzesComponent} from "./pages/admin/view-quizzes/view-quizzes.component";
import {AddQuizComponent} from "./pages/admin/add-quiz/add-quiz.component";
import {UpdateQuizComponent} from "./pages/admin/update-quiz/update-quiz.component";
import {ViewQuizQuestionsComponent} from "./pages/admin/view-quiz-questions/view-quiz-questions.component";
import {AddQuestionComponent} from "./pages/admin/add-question/add-question.component";
import {UpdateQuestionComponent} from "./pages/admin/update-question/update-question.component";
import {WelcomeUserComponent} from "./pages/user/welcome-user/welcome-user.component";
import {LoadQuizComponent} from "./pages/user/load-quiz/load-quiz.component";
import {InstructionsComponent} from "./pages/user/instructions/instructions.component";
import {QuizStartComponent} from "./pages/user/quiz-start/quiz-start.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'

  },
  {
    path: "signup",
    component:SignupComponent,
    pathMatch: "full",
  }, {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  }, {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children:[
      {
        path: '',
        component: WelcomeComponent,

      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent

      }, {
        path: 'add-category',
        component: AddCateggoryComponent
      },{
        path:'update-category/:cid/:title',
        component:UpdateCategoryComponent
      }, {
        path: 'quizzes',
        component: ViewQuizzesComponent
      }, {
        path: 'add-quiz',
        component: AddQuizComponent
      },{
        path:'update-quiz/:quizId',
        component: UpdateQuizComponent
      },{
        path:'view-questions/:quizId/:title',
        component:ViewQuizQuestionsComponent
      },{
        path:'add-question/:quizId/:title',
        component:AddQuestionComponent
      },{
        path:'update-question/:questionId/:title/:quizId',
        component:UpdateQuestionComponent
      }
    ]
  }, {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children:[
      {
        path: '',
        component:WelcomeUserComponent
      },
      {
        path:'quizzes/:categoryId',
        component: LoadQuizComponent
      },
      {
        path:'instructions/:quizId',
        component: InstructionsComponent,

      }
    ]
  },
  {
    path:'start-quiz/:quizId/:title',
    component: QuizStartComponent,
    canActivate: [NormalGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
