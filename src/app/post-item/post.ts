import {Input} from '@angular/core';

export class Post {

  title: String;
  content: String;
  loveIts: number;
  created_at: Date;

  constructor(title, content, loveIts, created_at) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = created_at;
  }
}
