import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddBookComponent } from './addBook/add-book/add-book.component';
import { AllBooksComponent } from './allBooks/all-books/all-books.component';

export const routes: Routes = [
  {
    path: '',
    component: AllBooksComponent,
  },
  {
    path: 'addBook',
    component: AddBookComponent,
  },
];
