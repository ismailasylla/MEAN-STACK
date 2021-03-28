import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../posts/post.model';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent= '';

  @Output() postCreated = new EventEmitter<Post>();

  onCreatePost (form: NgForm) {
    // if (form.invalid){
    //   return;
    // }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    }
    this.postCreated.emit(post)
    console.log(post)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
