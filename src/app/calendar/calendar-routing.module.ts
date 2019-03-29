import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarPageComponent } from './calendar-page/calendar-page.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
