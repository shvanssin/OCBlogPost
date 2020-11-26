import { Component, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { Post } from 'src/app/Modal/post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input('PostList') PostList: Post[];
  @Output() post:Post;
  constructor() { }

  ngOnInit(): void {
  }


}
