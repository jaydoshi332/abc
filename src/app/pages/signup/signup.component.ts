import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgForm} from "@angular/forms";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
  })

  public user = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  }
  constructor(private userService:UserService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit(signUpForm:NgForm) {

    if(this.user.username=='' || this.user.username==null){
      // alert("UserName is Required");
      this.snack.open("Username is required",'',{
        duration:3000,
      });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.warn(data);
        // alert("Success");
        Swal.fire('User Registered Successfully!!','User Id is '+data.id,'success');
        signUpForm.resetForm();
        signUpForm.form.markAsPristine();
      },
      (error => {
        console.warn(error);
        // alert("Something went wrong");
        this.snack.open("Something went wrong",'',{
          duration:3000,
        })
      })
    )
    //add user function from userService
  }
}
