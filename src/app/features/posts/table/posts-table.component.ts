import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../core/models/post.model';

@Component({
  selector: 'app-post-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent {
  @Input() posts: Post[] = [];
  @Output() viewDetails: EventEmitter<Post> = new EventEmitter();

  viewPostDetails(post: Post) {
    this.viewDetails.emit(post);
  }
}