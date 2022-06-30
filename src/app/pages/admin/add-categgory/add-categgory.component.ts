import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-add-categgory',
  templateUrl: './add-categgory.component.html',
  styleUrls: ['./add-categgory.component.css']
})
export class AddCateggoryComponent implements OnInit {

  category={
    title:'',
    description:''
  }
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }

  formSubmit(categoryForm:NgForm){
    console.warn("inside submit category");
    this.categoryService.addCategory(this.category).subscribe(
      (data:any)=>{
        Swal.fire('Success !!','Category is added successfully!!','success');
        categoryForm.resetForm();
        categoryForm.form.markAsPristine();
      },
      error => {
        Swal.fire("Erorr !!",'Something went wrong','error');
      }
    )
  }

}
