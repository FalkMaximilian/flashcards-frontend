import { NgClass, NgIf } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup = this.formBuilder.group(
    {
      username: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ]
      ],
    });
  submitted = false;
  authService = inject(AuthService);
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(
      token => {
        if (token) {
          console.log('Login successful, token:', token);
          // Redirect to home on successful login
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      error => {
        this.errorMessage = 'An error occurred during login';
        console.error('Login error', error);
      }
    );
  }
}
