import { Component, OnInit } from '@angular/core';
import { Reminder } from '../../core/models/reminder.model';
import { RemindersService } from '../../core/services/reminders/reminders.service';
import { paginationChangeEvent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-home',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  remindersResponse!: Reminder[];
  selectedReminder?: Reminder;
  seeAsTable: boolean = false;
  showAll: boolean = true;
  loading: boolean = false;

  pagination: paginationChangeEvent = {
    total: 0,
    currentPage: 1,
    pageSize: 16
  }

  constructor(private remindersService: RemindersService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    const { currentPage, pageSize } = this.pagination;
    this.loading = true;
    this.remindersService.getReminders(currentPage, pageSize)
      .subscribe({
        next: (response) => {
          this.remindersResponse = response;
          this.pagination.total = response.length;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  onPaginationChange(event: paginationChangeEvent) {
    this.pagination = event;
    this.getPosts();
  }

  selectPost(reminder: Reminder) {
    this.selectedReminder = reminder;
  }
}