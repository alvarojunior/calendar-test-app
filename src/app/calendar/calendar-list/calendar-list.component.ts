import { Component, Input } from '@angular/core';

import { CalendarEvent } from '../../model/calendar-event.model';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent {

  @Input()
  public events: CalendarEvent[];

}
