import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null; // Don't validate empty values to allow optional controls
    }

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const passwordValid =
      hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;

    return passwordValid
      ? null
      : {
          hasUpperCase: !hasUpperCase,
          hasLowerCase: !hasLowerCase,
          hasNumber: !hasNumber,
          hasSpecialCharacter: !hasSpecialCharacter,
        };
  };
}

export function passwordMatchValidator(
  controlName: string,
  matchingControlName: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (!control || !matchingControl) {
      return null;
    }

    if (matchingControl.errors && !matchingControl.errors['passwordMismatch']) {
      return null;
    }

    console.log("Comparing passwords")
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ passwordMismatch: true });
      console.log("Passwords do not match!")
    } else {
      matchingControl.setErrors(null);
      console.log("Passwords match!")
    }

    return null;
  };
}
