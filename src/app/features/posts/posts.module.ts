import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PostCardComponent } from './card/post-card.component';
import { PostDetailComponent } from './detail/post-detail.component';
import { PostsComponent } from './posts.component';
import { PostsRoutes } from './posts.routes';
import { PostsTableComponent } from './table/posts-table.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    PostsComponent,
    PostCardComponent,
    PostDetailComponent,
    PostsTableComponent
  ],
  providers: [
    provideRouter(PostsRoutes)
  ],
})

export class PostsModule { }