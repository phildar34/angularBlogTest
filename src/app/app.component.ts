import { Component } from '@angular/core';

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
    this.posts = [
      {
        title: 'Mon premier post',
        content: 'Lorem ipsum',
        loveIts: 0,
        created_at: this.date1
      },
      {
        title: 'Mon deuxieme post',
        content: 'auront des boutons qui permettent d\'augmenter et de diminuer le nombre de loveIts',
        loveIts: 0,
        created_at: this.date1
      },
      {
        title: 'Encore un post',
        content: 'Lorem ipsum',
        loveIts: 0,
        created_at: this.date1
      }];
  }
}
