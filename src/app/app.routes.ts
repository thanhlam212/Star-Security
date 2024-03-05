import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomepageComponent } from './components/page/homepage/components/homepage.component';
import { AboutUsComponent } from './components/page/about-us/components/about-us.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    // { path:'home', component: HomepageComponent },
    { 
        path: 'auth', 
        loadChildren: () => 
            import('./components/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'admin', 
        loadChildren: () => 
            import('./components/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'page',
        loadChildren: () =>
            import('./components/page/page.module').then(m => m.PageModule)
    }
    
    // { path:'login', component: LoginComponent },
    // { path:'about-us', component: AboutUsComponent },    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{}