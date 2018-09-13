import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../schemas/blog-schema';
import { BlogService } from '../blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  private blogSub: Subscription;

  constructor(private blogService: BlogService) { 

  }

  ngOnInit() {
    this.blogService.get();
    this.blogSub = this.blogService.getBlogUpdateListener()
      .subscribe((blogs: Blog []) => {
        this.blogs = blogs;
      });
  }

  ngOnDestroy() {
    this.blogSub.unsubscribe();
  }

}
