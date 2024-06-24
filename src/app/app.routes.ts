import { Routes } from '@angular/router';
import { authGuard, loginGuard } from './auth.guard';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SetsListComponent } from './sets-list/sets-list.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { SetDetailComponent } from './set-detail/set-detail.component';

export const routes: Routes = [
    {
        path: "",
        component: NavigationComponent,
        children: [
            { path: "sets", component: SetsListComponent},
            { path: "cards", component: CardsListComponent},
            { path: "set/:setId", component: SetDetailComponent},
            { path: "", redirectTo: "/sets", pathMatch: 'full' } // Default route
        ],
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
