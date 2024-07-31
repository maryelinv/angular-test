import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Status, { StatusDesc } from '../../../core/enums/status.enum';
import { Reminder } from '../../../core/models/reminder.model';

@Component({
  selector: 'app-reminder-card',
  templateUrl: './reminder-card.component.html',
  styleUrls: ['./reminder-card.component.scss']
})
export class ReminderCardComponent implements OnInit {
  @Input() reminder!: Reminder;
  @Input() save!: () => void;
  @Input() reminders: Reminder[];
  @Output() remindersUpdate = new EventEmitter<Reminder[]>();

  constructor() {
    this.reminders = [];
  }

  ngOnInit(): void {
    this.reminders = this.getReminders();
  }

  remove(id: number) {
    let reminder = this.reminders?.find(r => r.id == id)!;
    if (reminder) {
      reminder.deleted = true;
      this.update();
      this.save();
    }
  }

  restore(id: number) {
    let reminder = this.reminders?.find(r => r.id == id)!;
    if (reminder) {
      reminder.deleted = false;
      this.update();
      this.save();
    }
  }

  delete(id: number) {
    this.reminders = [...this.reminders.filter(r => r.id !== id)];
    this.update();
    this.save();
  }

  update() {
    this.remindersUpdate.emit(this.reminders);
  }
  changeStatus(id: number, status: Status): void {
    const reminder = this.reminders?.find(item => item.id == id);
    if (reminder) {
      reminder.status = status;
      this.update();
      this.save();
    }
  }

  getReminders(): Reminder[] {
    return JSON.parse(localStorage.getItem('reminders')!);
  }

  getStatusDesc(status: Status): string {
    return StatusDesc[status];
  }
}