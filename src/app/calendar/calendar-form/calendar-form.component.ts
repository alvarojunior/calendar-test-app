import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidateUrl } from '../../core/validators/url.validator';

@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.css']
})
export class CalendarFormComponent implements OnInit {

  @Output() public onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() public onReset: EventEmitter<any> = new EventEmitter();

  private form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      url: [
        'https://calendar.dev.time.ly/i98cgmcr',
        Validators.compose([Validators.required, ValidateUrl])
      ],
    });
  }

  handleSubmit(): void {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  handleReset(): void {
    if (this.form.valid) {
      this.form.reset();
      this.onReset.emit();
    }
  }
}
