import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    // { path:'home', component: HomepageComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{}