import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormErrorMessageComponent } from '../components/form/form-error-message.component';

import { CalendarService } from './calendar.service';
import { CalendarRoutingModule } from './calendar-routing.module';

import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarItemComponent } from './calendar-item/calendar-item.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';

@NgModule({
  declarations: [
    CalendarListComponent,
    CalendarItemComponent,
    CalendarPageComponent,
    CalendarFormComponent,
    FormErrorMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CalendarRoutingModule
  ],
  exports: [
    CalendarFormComponent,
    CalendarListComponent,
    CalendarItemComponent
  ],
  providers: [CalendarService],
})
export class CalendarModule { }
