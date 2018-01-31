import { Post } from './../models/post';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public items: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.items = this.postService.all();
    console.log(this.items);
  }

}
