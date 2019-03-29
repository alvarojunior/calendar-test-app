import { Injectable } from '@angular/core';

import { ModelAdapter } from '../../core/model/model-adapter';
import { Calendar } from '../calendar.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarAdapter implements ModelAdapter<Calendar> {
  adapt(data: any): Calendar {
    return new Calendar(
      data.id,
      data.title,
    );
  }
}
