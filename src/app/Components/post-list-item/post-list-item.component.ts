import { Component, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/Modal/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
 @Input() post: Post;
 PostTitle: string;
 loveIts : number;
 PostDate: Date;
 PostContent :string;
 isPos: boolean;
 isNeg: boolean;

  constructor() {

   }

  ngOnInit(): void {
    this.PostTitle = this.post.title;
    this.loveIts = this.post.loveIts;
    this.PostDate = this.post.created_at;
    this.PostContent = this.post.content;
    this.isPos = (this.loveIts > 0);
    this.isNeg = (this.loveIts < 0);
  }
  ngOnChanges(changes: any) {
    this.isPos = (this.loveIts > 0);
    this.isNeg = (this.loveIts < 0);
  }

  onAdd() : void{
    this.loveIts++;
    this.isPos = (this.loveIts > 0);
    this.isNeg = (this.loveIts < 0);
    console.log('Added ' + this.loveIts+ '; isPos '+this.isPos);
  }

  onReduce() : void{
    this.loveIts--;
    this.isPos = (this.loveIts > 0);
    this.isNeg = (this.loveIts < 0);
    console.log('Reduced ' + this.loveIts+ '; isNeg '+this.isNeg);

  }
  getColor() {
    if(this.isPos != null && this.isPos) {
      return 'green';
    } else if(this.isNeg != null && this.isNeg) {
      return 'red';
    }
}

}
