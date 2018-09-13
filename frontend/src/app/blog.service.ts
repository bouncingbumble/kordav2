import { Injectable } from '@angular/core';
import { Blog } from './schemas/blog-schema';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from "../environments/environment";
const BACKEND_URL = environment.apiUrl + '/posts';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog [] = [];
  private blogsUpdated = new Subject<Blog[]>();
  constructor(private http: HttpClient) { }

  get(){
    this.http.get<{message: string, posts: Blog[]}>(BACKEND_URL)
    .subscribe((response) => {
      this.blogs = response.posts;
      this.blogsUpdated.next([...this.blogs]);
    });
  }

  getBlogUpdateListener(){
    return this.blogsUpdated.asObservable();
  }
}
