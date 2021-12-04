import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
  <ul class="filters">
    <li>
      <div class="list-view">
        <ul>
          <li>
            <a (click)="onSelectViewType('grid')"><i class="fa fa-th" aria-hidden="true"></i></a>
          </li>
          <li>
            |
          </li>
          <li>
            <a (click)="onSelectViewType('list')"><i class="fa fa-bars" aria-hidden="true"></i></a>

          </li>
        </ul>
      
     

      </div>
       
    </li>
   
    <li>
        <select (change)="onSelectPriceDir(priceInput.value)"  #priceInput>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        </select>
    </li>
  </ul>
  `,
  styles: [
    `
    .filters{
      list-style: none;
      &>li{
          display: inline-block;
          padding:0px 20px;
  
          a{
              cursor: pointer;
          }

          .list-view{
           
            padding: 5px 10px;
            border: 1px solid #000;
            ul{
              padding:0;
              li{
                display: inline-block;
                padding: 0px 5px;
              }
            }
          }
      }
    }
    
    `
  ]
})
export class FilterComponent {
  @Output() afterSelectViewType = new EventEmitter<string>();
  @Output() afterSelectPriceDirection = new EventEmitter<string>();
  
  
  constructor() { }

  onSelectViewType(value:string){
    this.afterSelectViewType.emit(value);
  }

  onSelectPriceDir(value:string){
    this.afterSelectPriceDirection.emit(value);

  }



}
