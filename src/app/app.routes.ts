import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './clients/feature/home/home.component';
import { AboutComponent } from './clients/feature/about/about.component';

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
    }
];

export class AppRoutes{}