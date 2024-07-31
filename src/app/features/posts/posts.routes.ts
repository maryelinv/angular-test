import { Routes } from "@angular/router";
import { PostsComponent } from "./posts.component";

export const PostsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];