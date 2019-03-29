import { Injectable } from '@angular/core';
import { Adapter } from '../core/adapter';

export class CalendarEvent {
  constructor(
    public uid: string,
    public title: string,
    public startDate: Date,
    public endDate: Date,
    public shortDescription: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class CalendarEventAdapter implements Adapter<CalendarEvent> {
  adapt(item: any): CalendarEvent {
    return new CalendarEvent(
      item.uid,
      item.title,
      new Date(item.start_datetime),
      new Date(item.end_datetime),
      item.description_short,
    );
  }
}
