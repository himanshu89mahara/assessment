import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './templates/product.template.html',
  styleUrls:['./styles/product.style.scss']
})
export class ProductComponent {
  @Input() product:Product | any;
  @Input() listClass = 'col-3';
  @Input() index = 0;

  constructor() { }
}
