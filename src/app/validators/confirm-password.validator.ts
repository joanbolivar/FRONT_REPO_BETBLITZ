import { FormGroup, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (control instanceof FormGroup) {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');
    if (password && passwordConfirmation && password.value !== passwordConfirmation.value) {
      return { 'passwordMismatch': true };
    }
  }
  return null;
};