import { Component } from '@angular/core';
import Status from '../../core/enums/status.enum';
import { Reminder } from '../../core/models/reminder.model';

@Component({
  selector: 'app-home',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent {
  reminders!: Reminder[];

  constructor() { }

  add(text: string) {
    let reminder = {
      id: this.reminders.length > 0 ? this.reminders?.at(-1)?.id! + 1 : 1,
      text: text,
      status: Status.pending,
      createdDate: new Date(),
      deleted: false
    };
    this.reminders.push(reminder);
  }

  remove(id: number) {
    let reminder = this.reminders.find(r => r.id === id)!;
    if (reminder !== undefined) {
      const index = this.reminders.indexOf(reminder);
      if (index > -1) {
        this.reminders[index].deleted = true;
      }
    }
  }

  delete(id: number) {
    let reminder = this.reminders.find(r => r.id === id)!;
    if (reminder !== undefined) {
      const index = this.reminders.indexOf(reminder);
      if (index > -1) {
        this.reminders.splice(index, 1);
      }
    }
  }

}