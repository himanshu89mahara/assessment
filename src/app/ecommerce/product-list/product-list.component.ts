import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, initialProducts, Product2 } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {
  products: Product[] = initialProducts();
  products$!: Observable<Product2[]>;
  viewType='grid';
  priceDir:string = 'asc';

  constructor(private productServ:ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productServ.productList();
  }

}
