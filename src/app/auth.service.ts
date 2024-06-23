import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode }from 'jwt-decode';
import { Router } from '@angular/router';

interface LoginResponse {
  token?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  router = inject(Router);
  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient) {}

  register(credentials: {username: string, password: string, matching_password: string, email: string}): Observable<string | null> {
    return this.http.post<LoginResponse>('https://go-webserver-production.up.railway.app/api/users/register', credentials).pipe(
      map(response => {
        if (response.token) {
          // Successful registration
          localStorage.setItem(this.tokenKey, response.token);
          return response.token;
        } else {
          // Unsuccessful registration
          return null;
        }
      }),
      catchError(error => {
        console.error('Error during registration: ', error);
        return throwError(() => new Error("An error occured during registration"));
      })
    )
  }

  login(credentials: {username: string, password: string}): Observable<string | null> {
    return this.http.post<LoginResponse>('https://go-webserver-production.up.railway.app/api/users/login', credentials).pipe(
      map(response => {
        if (response.token) {
          // Successful login
          localStorage.setItem(this.tokenKey, response.token);
          return response.token;
        } else {
          // Unsuccessful login
          return null;
        }
      }),
      catchError(error => {
        console.error('Error during login: ', error);
        return throwError(() => new Error("An error occured during login"));
      })
    );
  }

  logout(): void {
    console.log("Logging out!")
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getJwtToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  public getUsername(): string | null {
    const token = this.getJwtToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.username; // Adjust the property name based on your JWT structure
    }
    return "FunkeyMonkey";
  }

}
