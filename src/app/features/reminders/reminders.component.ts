import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Status from '../../core/enums/status.enum';
import { Reminder } from '../../core/models/reminder.model';

@Component({
  selector: 'app-home',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  reminders: Reminder[];
  @ViewChild('reminderText') reminderInputRef: ElementRef<HTMLInputElement> = null!;

  constructor() {
    this.reminders = [];
  }

  ngOnInit(): void {
    this.getReminders();
  }

  getReminders() {
    const storedReminders = localStorage.getItem('reminders')!;
    if (this.reminders) {
      this.reminders = JSON.parse(storedReminders);
    }
  }

  add(text: string) {
    if (text.trim() !== '') {
      let reminder: Reminder = {
        id: this.reminders && this.reminders?.length > 0 ? this.reminders.at(-1)?.id! + 1 : 1,
        text: text.trim(),
        status: Status.pending,
        createdDate: new Date(),
        deleted: false
      };
      this.reminders = [...(this.reminders ? this.reminders : []), reminder];
      this.reminderInputRef.nativeElement.value = '';
      this.save();
    }
  }

  remove(id: number) {
    let reminder = this.reminders?.find(r => r.id == id)!;
    if (reminder) {
      reminder.deleted = true;
      this.save();
    }
  }

  restore(id: number) {
    let reminder = this.reminders?.find(r => r.id == id)!;
    if (reminder) {
      reminder.deleted = false;
      this.save();
    }
  }

  delete(id: number) {
    this.reminders = this.reminders.filter(r => r.id !== id);
    this.save();
  }

  save(): void {
    localStorage.setItem('reminders', JSON.stringify(this.reminders));
  }

  update(reminders: Reminder[]) {
    this.reminders = [...reminders];
  }

  showDeleted(): boolean {
    return this.reminders.some(reminder => reminder.deleted);
  }
}