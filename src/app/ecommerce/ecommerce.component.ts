import { Component, OnInit } from '@angular/core';
import {Product, initialProducts} from './models/product.model';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})
export class EcommerceComponent{
  products: Product[] = initialProducts();
  viewType='grid';
  priceDir:string = 'asc';

  constructor() { }
}
