import { Routes } from '@angular/router';
import { authGuard, loginGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () =>
            import('./home/home.component').then(
                (m) => m.HomeComponent
            ),
        canActivate: [authGuard],
    },
    {
        path: "login",
        loadComponent: () =>
            import('./login/login.component').then(
                (m) => m.LoginComponent
            ),
        canActivate: [loginGuard],
    },
    {
        path: "register",
        loadComponent: () => 
            import('./registration/registration.component').then(
                (m) => m.RegistrationComponent
            ),
        canActivate: [loginGuard],
    },
    { 
        path: '**', 
        redirectTo: '' 
    },
];
