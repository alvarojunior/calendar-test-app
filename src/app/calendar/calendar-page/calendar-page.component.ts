import { Component } from '@angular/core';
import { tap, flatMap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { Calendar, CalendarEvent } from '../../model';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent {

  private calendar: Calendar;
  private events: CalendarEvent[];

  constructor(
    private calendarService: CalendarService,
    private toastr: ToastrService
  ) { }

  handleSubmit(values) {
    const { url } = values;
    this.calendarService.getCalendarInfo(url)
      .pipe(
        tap(calendar => this.calendar = calendar),
        flatMap(calendar => this.calendarService.getCalendarEvents(calendar.id)),
      )
      .subscribe(
        events => this.events = events,
        () => this.toastr.error('An error has occurred in this request', 'Error')
      );
  }

  handleReset() {
    this.calendar = undefined;
    this.events = [];
  }
}
