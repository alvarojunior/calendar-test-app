import { Injectable } from '@angular/core';
import { Adapter } from '../core/adapter';

export class Calendar {
  constructor(
    public id: number,
    public title: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class CalendarAdapter implements Adapter<Calendar> {
  adapt(data: any): Calendar {
    return new Calendar(
      data.id,
      data.title,
    );
  }
}
