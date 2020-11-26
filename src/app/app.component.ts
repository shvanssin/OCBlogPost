import { Component, Output } from '@angular/core';

import { Post } from './Modal/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OCBlogPost';
  @Output() PostList :  Post[] = [{
    title: 'Post 1', content: 'this is the first content.', loveIts: 0, created_at : new Date()},
    {
      title: 'Post 2', content: 'this is the second content.', loveIts: 0, created_at :new Date()},
      {
        title: 'Post 3', content: 'this is the third content.', loveIts: 0, created_at :new Date()
  }];
}
