import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'banner',loadChildren: () => import('./banner/banner.module').then(m=>m.BannerModule)},
  {path:'count-down',loadChildren: () => import('./count-down-timer/count-down-timer.module').then(m=>m.CountDownTimerModule)},
  {path:'dynamic-div',loadChildren: () => import('./dynamic-div/dynamic-div.module').then(m=>m.DynamicDivModule)},
  {path:'ecommerce',loadChildren: () => import('./ecommerce/ecommerce.module').then(m=>m.EcommerceModule)},
  {path:'route-5',loadChildren: () => import('./route5/route5.module').then(m=>m.Route5Module)},
  {path:'**',redirectTo:'banner'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
