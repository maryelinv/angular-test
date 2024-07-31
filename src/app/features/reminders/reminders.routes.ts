import { Routes } from "@angular/router";
import { RemindersComponent } from "./reminders.component";

export const RemindersRoutes: Routes = [
  {
    path: '',
    component: RemindersComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];