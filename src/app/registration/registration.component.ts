import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import {
  passwordStrengthValidator,
  passwordMatchValidator,
} from '../password.validator';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass, ThemeSwitcherComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  registrationForm: FormGroup = this.formBuilder.group(
    {
      username: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
          passwordStrengthValidator(),
        ],
      ],
      matching_password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    },
    { validators: passwordMatchValidator('password', 'matching_password') }
  );

  submitted = false;
  authService = inject(AuthService);

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    this.authService.register(this.registrationForm.value).subscribe({
      next: (token) => {
        if (token) {
          console.log("Registration successful, token:", token);
          // Redirect to home on successful registration
          this.router.navigate(['/']);
        } else {
          // Unsuccessful registration
          console.log("Registration failed");
        }
      },
      error: (error) => {
        console.error('Error during registration: ', error);
      },
    });
  }
}
