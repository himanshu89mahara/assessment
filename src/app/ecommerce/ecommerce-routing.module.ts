import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'',component:EcommerceComponent},
  {path:'productlist',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
