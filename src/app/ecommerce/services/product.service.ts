import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product2 } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  productList(){
    return this.http.get<Product2[]>('http://fakestoreapi.com/products');

  }
}
