import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'homepage', component: HomepageComponent },
    { path:'about-us', component: AboutUsComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{}