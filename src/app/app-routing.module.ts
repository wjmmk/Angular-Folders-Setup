import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { DashboardModule } from '@modules/dashboard/dashboard.module';
import { EMPTY_STRING, INTERNAL_PATHS } from '@data/constants/routes';

const routes: Routes = [
  {
    path: EMPTY_STRING,
    component: SkeletonComponent,
    children: [
      {
        path: INTERNAL_PATHS.ASESORI_CREDIT_DEFAULT,
        loadChildren: () => import('@modules/dashboard/dashboard.module').
         then( (m): typeof DashboardModule => m.DashboardModule),  
      },
      { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' }
    ], 
  },
  { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
