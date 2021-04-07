import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { PostsService } from './posts.service';
import { Post } from '../components/posts/post.model';

describe('PostsService', () => {
  let service: PostsService;

  let httpTestingController: HttpTestingController;

  let testPosts: Post[] = [
    {id: 1, title:'post1', content:'content1'},
    {id: 2, title:'post2', content:'content2'},
    {id: 3, title:'post3', content:'content3'},
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    service = TestBed.inject(PostsService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET all posts', ()=> {
    service.getPosts().subscribe((data: Post[]) => {
      expect(data.length).toBe(3)
    });

      let postsRequest: TestRequest = httpTestingController.expectOne('http://localhost:3000/api/posts');
      expect(postsRequest.request.method).toEqual('GET');

      postsRequest.flush(testPosts);

      httpTestingController.verify();
  })

});




