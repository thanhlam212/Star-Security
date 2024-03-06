import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomepageComponent } from './clients/feature/homepage/homepage.component';
import { AboutUsComponent } from './clients/feature/about-us/about-us.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path:'', component: HomepageComponent },
    { path:'login', component: LoginComponent },
    { path:'about-us', component: AboutUsComponent },    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{}