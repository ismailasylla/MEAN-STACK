import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { emit } from 'node:process';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent= '';

  @Output() postCreated = new EventEmitter();

  onCreatePost () {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreated.emit(post)
    console.log(post)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
