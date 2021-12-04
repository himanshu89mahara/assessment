import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './_parts/list/filter.component';
import { ProductComponent } from './_parts/list/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EcommerceComponent,
    FilterComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EcommerceRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class EcommerceModule { }
