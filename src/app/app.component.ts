import { Component } from '@angular/core';
import {Post} from './post-item/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  date1 = new Date('Sep 23, 2013 12:00:00'); // Monday
  posts;

  constructor() {
    const post1 = new Post('Mon premier post',
      'Lorem ipsum',
      0,
      this.date1);
    const post2 = new Post('Mon deuxième post',
      'Lorem ipsum',
      0,
      this.date1);
    const post3 = new Post('Mon dernier post',
      'Lorem ipsum',
      0,
      this.date1);

    this.posts = [post1, post2 , post3];
  }
}
