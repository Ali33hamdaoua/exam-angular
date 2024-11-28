import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BookService } from './services/book.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exam-angular';


  

}
