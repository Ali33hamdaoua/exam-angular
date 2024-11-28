import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:3333/Books";

  public getAll(){
    return this.http.get<Book[]>(this.url);
  }

  public delete(id:number){
    return this.http.delete(this.url+"/"+id);
  }


  public add(book:Book){
    return this.http.post(this.url,book);
  }

  public update(book:Book){
    this.http.put
    return this.http.put(this.url+"/"+book.id ,book)
  }
}
