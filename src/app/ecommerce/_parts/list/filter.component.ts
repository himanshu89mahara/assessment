import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl:'./templates/filter.template.html',
  styleUrls:['./styles/filter.style.scss']
})
export class FilterComponent {
  @Output() afterSelectViewType = new EventEmitter<string>();
  @Output() afterSelectPriceDirection = new EventEmitter<string>();
  @Input() viewType:string = '';
  
  
  constructor() { }

  onSelectViewType(value:string){
    this.afterSelectViewType.emit(value);
    this.viewType = value;
  }

  onSelectPriceDir(value:string){
    this.afterSelectPriceDirection.emit(value);

  }



}
