import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo:"/dc"},
  {path:':city',pathMatch:'full',component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
