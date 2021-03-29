import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from './post.model';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts : Post[] = [];
  private postsSub!: Subscription;
  constructor(public postsService : PostsService ) { }


  ngOnInit(): void {
     this.posts = this.postsService.getPosts();
     this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[])=>{
        this.posts = posts
      })
  }

   ngOnDestroy(): void {
     this.postsSub.unsubscribe();
  }

}


