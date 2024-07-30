import { Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";

export const FeatureRoutes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: 'reminders',
        loadChildren: () => import('./reminders/reminders.module').then(m => m.RemindersModule)
      },
    ]
  },

];