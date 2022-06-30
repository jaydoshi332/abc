import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories:any=[]
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.warn(data);
      },error => {
        console.warn(error);
        Swal.fire("Error!!","Error in loading data...",'error');
      }
    )
  }
  deleteCategory(categoryId:any){
    Swal.fire({
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Delete Category?'
    }).then((result)=>{
      if(result.isConfirmed){
        this.categoryService.deleteCategory(categoryId).subscribe(
          (data:any)=>{
            Swal.fire('success!!','Category Deleted Successfully','success');
            this.categories=this.categories.filter((category:any)=>category.cid!=categoryId);
          },
          error => {
            Swal.fire('error!!','Something went wrong','error');
          }
        );
      }
    })
  }

}
