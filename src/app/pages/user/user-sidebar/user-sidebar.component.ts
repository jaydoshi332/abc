import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {CategoryNormalService} from "../../../service/category-normal.service";

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  categories:any;
  constructor(private categoryNormalService:CategoryNormalService) {
  }

  ngOnInit(): void {
    this.categoryNormalService.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },error => {
        Swal.fire('error!!','Something went wrong','error');
        console.warn(error);
      }
    )
  }
}
