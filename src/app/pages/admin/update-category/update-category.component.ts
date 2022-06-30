import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import Swal from "sweetalert2";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  cid:any;
  categoryTitle:any;
  category:any=[];
  constructor(private activatedRoute:ActivatedRoute,private categoryService:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.cid=this.activatedRoute.snapshot.params['cid'];
    this.categoryTitle=this.activatedRoute.snapshot.params['title'];
    console.warn(this.categoryTitle);
    this.categoryService.getCategory(this.cid).subscribe(
      (data:any)=>{
        this.category=data;
        console.warn(this.category);
      },error => {
        Swal.fire('error!!','Something went wrong','error');
        console.log(error);
      }
    )
  }
  formSubmit(quizForm: NgForm) {
    this.categoryService.updateCategory(this.category).subscribe(
      (data:any)=>{
        Swal.fire("success!!","Category Updated Successfully",'success').then((e)=>{
          this.router.navigate(['/admin/categories']);
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

