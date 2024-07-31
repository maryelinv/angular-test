import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/models/post.model';
import { PostsService } from '../../core/services/posts/posts.service';
import { PaginationChangeEvent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-home',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsResponse!: Post[];
  selectedPost?: Post;
  seeAsTable: boolean = false;
  showAll: boolean = true;
  loading: boolean = false;

  pagination: PaginationChangeEvent = {
    total: 0,
    currentPage: 1,
    pageSize: 10
  }

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    const { currentPage, pageSize } = this.pagination;
    this.loading = true;
    this.postsService.getPosts(currentPage, pageSize)
      .subscribe({
        next: (response) => {
          this.postsResponse = response;
          this.pagination.total = response.length;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  onPaginationChange(event: PaginationChangeEvent) {
    this.pagination = event;
    this.getPosts();
  }

  selectPost(post: Post) {
    this.selectedPost = post;
  }
}