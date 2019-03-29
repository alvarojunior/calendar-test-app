import { AbstractControl } from '@angular/forms';

const URL_REGEXP = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

export function ValidateUrl(control: AbstractControl) {
  if (control.pristine) {
    return null;
  }

  control.markAsTouched();

  if (!URL_REGEXP.test(control.value)) {
    return { url: true };
  }

  return null;
}
