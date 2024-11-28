import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-book',
  imports: [ReactiveFormsModule ,RouterModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  formGroup!:FormGroup;
  
  constructor(private bookService:BookService ,private router:Router){
    this.formGroup=new FormGroup({
      title:new FormControl(''),
      price:new FormControl(''),
      hauter:new FormControl(''),
    });
  }

  public add(){
    this.bookService.add(this.formGroup.value).subscribe(next =>{
this.router.navigate(['/']);
    })
  }

}
