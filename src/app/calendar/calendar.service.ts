import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import {
  Calendar,
  CalendarAdapter,
  CalendarEvent,
  CalendarEventAdapter
} from '../model';

// TODO Use an interceptor
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(
    private http: HttpClient,
    private calendarAdapter: CalendarAdapter,
    private calendarEventAdapter: CalendarEventAdapter,
  ) { }

  getCalendarInfo(url: String): Observable<Calendar> {
    return this.http.post(`${environment.apiUrl}/info`, { url }, httpOptions).pipe(
      map((response: { data: any }) => this.calendarAdapter.adapt(response.data)),
    );;
  }

  getCalendarEvents(id: number): Observable<CalendarEvent[]> {
    const url = `${environment.apiUrl}/${id}/events`;
    return this.http.get(url).pipe(
      map((response: { data: { items: Array<any> } }) => {
        const { data: { items } } = response;
        return items.map(item => this.calendarEventAdapter.adapt(item));
      }),
    );
  }

}
