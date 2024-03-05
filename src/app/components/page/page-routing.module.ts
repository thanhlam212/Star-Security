import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/components/homepage.component';
import { AboutUsComponent } from './about-us/components/about-us.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    loadChildren: () =>
      import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: "about",
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
