import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: "dashboard",
    pathMatch: 'full'
  },
  {
    path: "dashboard",
    loadChildren:() => 
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "staff",
    loadChildren: () =>
      import('./staff/staff.module').then(m => m.StaffModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
