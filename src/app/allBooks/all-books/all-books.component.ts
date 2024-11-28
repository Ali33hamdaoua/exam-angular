import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-books',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css',
})
export class AllBooksComponent implements OnInit {
  books: Book[] = [];
  showForm: boolean = false;
  formGroup!: FormGroup;

  constructor(
    private bookService: BookService,
    private bookSerive: BookService
  ) {
    this.formGroup = new FormGroup({
      id:new FormControl(''),
      title: new FormControl(''),
      price: new FormControl(''),
      hauter: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.bookSerive.getAll().subscribe((next) => {
      this.books = next;
    });
  }

  public delete(id: number) {
    this.bookSerive.delete(id).subscribe((next) => {
      this.getAll();
    });
  }

  public showFormUpdate(book: Book) {
    this.showForm = true;
     
    this.formGroup = new FormGroup({
      id:new FormControl(book.id),
      title: new FormControl(book.title),
      price: new FormControl(book.price),
      hauter: new FormControl(book.hauter),
    });
  }


  public update(){
    console.log(this.formGroup.value);
    this.bookSerive.update(this.formGroup.value).subscribe(next=>{
      this.getAll();
      this.showForm=false;

    })
  }
}
