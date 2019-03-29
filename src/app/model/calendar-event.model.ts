export class CalendarEvent {
  constructor(
    public uid: string,
    public title: string,
    public startDate: Date,
    public endDate: Date,
    public shortDescription: string,
  ) { }
}
