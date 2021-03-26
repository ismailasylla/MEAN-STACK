import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredValue = ''
  newPost = '';

  createPost () {
    this.newPost = this.enteredValue 
    console.log(this.enteredValue)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
