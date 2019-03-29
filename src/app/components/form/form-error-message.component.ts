import { Component, Input, Host, SkipSelf } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.css']
})
export class FormErrorMessageComponent {

  @Input() controlName: string;
  @Input() errorKey: string;

  constructor(@Host() @SkipSelf() private form: FormGroupDirective) { }

  get isInvalid() {
    const control = this.form.form.get(this.controlName);
    return control.hasError(this.errorKey) && (control.dirty || this.form.submitted);
  }
}
