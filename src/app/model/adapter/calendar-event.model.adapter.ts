import { Injectable } from '@angular/core';

import { ModelAdapter } from '../../core/model/model-adapter';
import { CalendarEvent } from '../calendar-event.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventAdapter implements ModelAdapter<CalendarEvent> {
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
