import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() title;
  @Input() content;
  @Input() loveIts;
  @Input() created_at;

  constructor() { }

  ngOnInit() {
  }

  loveAdd() {
    this.loveIts++;
  }

  loveRemove() {
    this.loveIts--;
  }

}
