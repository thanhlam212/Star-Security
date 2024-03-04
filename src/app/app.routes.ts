import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'homepage', component: HomepageComponent },
    { path:'about-us', component: AboutUsComponent },
    { path:'back-home', component: AppComponent}
];
