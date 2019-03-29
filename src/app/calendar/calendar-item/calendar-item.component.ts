import { Component, Input } from '@angular/core';

import { CalendarEvent } from '../../model/calendar-event.model';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class CalendarItemComponent {

  @Input()
  public event: CalendarEvent;

}
