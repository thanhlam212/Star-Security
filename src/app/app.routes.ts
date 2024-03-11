import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './clients/feature/home/home.component';
import { AboutComponent } from './clients/feature/about/about.component';
import { LoginComponent } from './auth/login/login.component';



export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home Page'},
    },
    {
        path:'about',
        component: AboutComponent,
        data: { title: 'about'}
    },
    {
        path:'login',
        component: LoginComponent,
        data: { title: 'login'}
    }
];

export class AppRoutes{}