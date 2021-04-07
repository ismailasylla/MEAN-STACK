import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';
import { Post } from '../components/posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts() {
   return this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData)=>{
        this.posts = postData.posts;
        this.postUpdated.next([...this.posts])
      })
  }

  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post).subscribe((responseData)=>{
        console.log(responseData.message)
        this.posts.push(post);
        this.postUpdated.next([...this.posts])
        return
    })
    console.log(post)
  }

  

  constructor(private http: HttpClient) {}
}
