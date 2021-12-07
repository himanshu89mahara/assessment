import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input() appSort:any;
  @Output('afterSelectSort') selectSort = new EventEmitter(); 

  constructor(public ele: ElementRef) { }

  @HostListener('click',['$event.target'])
  onClick(th:HTMLElement){
    if(th.classList.contains('sort')){
      if(th.dataset.hasOwnProperty('sort')){
        const column_name= th.dataset['sort'];
        let direction = '';

        if(this.appSort.name != column_name){
          this.appSort.direction='';
        }

        th.parentNode?.querySelectorAll('.sort').forEach((element)=>{
          element.classList.remove('sort-asc');
          element.classList.remove('sort-desc');
        });


        this.appSort.name=column_name;
        switch(this.appSort.direction){
          case 'asc':
            this.appSort.direction = 'desc';
            direction = 'sort-desc';
            break;
          case 'desc':
            this.appSort.direction = '';
            break;
            default:
              this.appSort.direction = 'asc';
              direction = 'sort-asc';
        }
        if(direction){
          th.classList.add(direction);
        }
        this.afterSelectSort();
      }
    }
  }
  
  afterSelectSort(){
    this.selectSort.emit(this.appSort);
  }

}
