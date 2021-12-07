import { Component, OnInit } from '@angular/core';
import { catchError, delay, Observable, of, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {
  //products: Product[] = initialProducts();
  products$: Observable<Product[]> | undefined;
  viewType='grid';
  priceDir:string = 'asc';
  inProgress:Boolean = true;
  inError:Boolean = false;
  errorMessage:string = '';

  constructor(private productServ:ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productServ.productList().pipe(
      tap(() => this.inProgress = false),
      catchError((err)=>{
        this.errorMessage = err.message;
      this.inProgress = false;
      this.inError = true;

      return of([]);
    }));
  
  }

}
function err(err: any): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}

