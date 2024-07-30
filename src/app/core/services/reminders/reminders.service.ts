import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { Reminder } from '../../models/reminder.model';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.baseUrl}reminders`;
  }

  getReminders(pageNumber: number = 1, pageSize: number = 12) {
    const limit = pageSize; const offset = (pageNumber - 1) * pageSize;
    let params = new HttpParams().set('limit', limit.toString())
      .set('offset', offset.toString());
    return this.http.get<Reminder[]>(this.baseUrl, { params })
  }
}