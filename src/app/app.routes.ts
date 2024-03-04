import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomepageComponent } from './components/page/homepage/homepage.component';
import { AboutUsComponent } from './components/page/about-us/about-us.component';
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