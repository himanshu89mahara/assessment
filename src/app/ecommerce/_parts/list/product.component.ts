import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  template: `
  
  <div [class]="listClass">
    <div class="product">
      <div class="image">
        <img [src]="product.image" />
      </div>
      <div class="description">
        <ul>
          <li>
            <h4 class="product-heading">{{product.title}}</h4>
          </li>
          <li>
              <p class="price">$ {{product.price}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
      .col-3{
        width:25%;
        float:left;
        transition: .5s;
      }

      .col-2{
        width:50%;
        float:left;
        transition: .5s;
      }

      .product {
        padding: 5px;
        border:1px solid #000;
        margin:20px 10px;
        img{
            // width:250px;
            height:30vh;
            margin:auto;
            object-fit: contain;
        }
        .description{
            padding: 10px 5px;
            ul{
                // display: flex;
                list-style: none;
                // align-items: center;
                // flex-wrap: wrap;
                // justify-content: space-between;
                margin:0;
                padding: 0;
            }

            .product-heading,.price{
                margin:0;
                padding:0;
            }

            .product-heading{
              white-space:nowrap;
              text-overflow:ellipsis;
              overflow:hidden;
            }
        }
      }
    
    `
  ]
})
export class ProductComponent {
  @Input() product:Product | any;
  @Input() listClass = 'col-3';

  constructor() { }
}
