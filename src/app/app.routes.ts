import { Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { HomepageComponent } from './componets/homepage/homepage.component';

export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'homepage', component: HomepageComponent },
];
