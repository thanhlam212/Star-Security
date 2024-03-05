import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: 'full'
  },
  {
    path: "main",
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
