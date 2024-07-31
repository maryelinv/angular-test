import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ReminderCardComponent } from './reminder-card/reminder-card.component';
import { RemindersComponent } from './reminders.component';
import { RemindersRoutes } from './reminders.routes';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    RemindersComponent,
    ReminderCardComponent
  ],
  providers: [
    provideRouter(RemindersRoutes)
  ],
})

export class RemindersModule { }