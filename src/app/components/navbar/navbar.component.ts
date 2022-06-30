import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isActive = false;
  user: any = null;

  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.isActive = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(data=>{
      this.isActive = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();
    })
  }

  public logout() {
    this.loginService.logout();
    window.location.reload();
  }

}
