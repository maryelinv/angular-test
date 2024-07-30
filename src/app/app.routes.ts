import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];