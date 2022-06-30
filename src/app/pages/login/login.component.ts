import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    username:'',
    password:''
  }
  constructor(private snack:MatSnackBar,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.warn("login button clicked");
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.warn("Success");
        console.warn(data);
        //login
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{
            console.warn(user);
            this.loginService.setUser(user);
            if(this.loginService.getUserRole()=="ADMIN"){
              //redirect: ADMIT: Admin dashboard
              //   window.location.href='/admin';
              this.router.navigate(['/admin']);
              this.loginService.loginStatusSubject.next(true);
            }else if(this.loginService.getUserRole()=="NORMAL"){
              //redirect: NORMAL : Normal dashboard
              // window.location.href='/user-dashboard';
              this.router.navigate(['/user-dashboard']);
              this.loginService.loginStatusSubject.next(true);
            }else{
              this.loginService.logout();
            }



          }
        )
      },
      (error:any)=>{
        console.warn("Error");
        console.warn(error);
        this.snack.open("Invalid Details !! Try again ",'',{
          duration:3000,
        });
      }
    );



  }

}
