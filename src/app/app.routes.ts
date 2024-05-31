import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component:HomeComponent, pathMatch: 'full'},
    { path:'login', component:LoginComponent, pathMatch: 'full'},
    { path:'register', component:RegisterComponent, pathMatch: 'full'},
];
