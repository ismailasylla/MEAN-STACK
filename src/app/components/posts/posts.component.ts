import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // posts = [
  //   {title:'First Post', content: 'First post Content'},
  //   {title:'Second Post', content: 'Second post Content'},
  //   {title:'Third Post', content: 'Third post Content'},
  // ]
  @Input() posts = [];
  constructor() { }

  ngOnInit(): void {
  }

}
