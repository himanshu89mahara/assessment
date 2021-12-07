import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform <AnyData>(value: AnyData[] | null, column:string, direction:string): AnyData[]|null {
    if(value){
      if(column && direction){
        const _d = (direction=='asc')?this.sortAsc([...value],column):this.sortDesc([...value],column);
        return _d;
      }else{
        console.log(value);
        return value;  
      }
    }else{
      return value;
    }
    
  }

  sortAsc <AnyData>(items:Array<AnyData>,column:string){
    return [
      ...items.sort(
        (a:any,b:any)=>{
          if(typeof a[column] === 'string'){
            return (a[column].toUpperCase() < b[column].toUpperCase())?-1:1;
          }else{
            return a[column]-b[column];
          }
        }
     )
    ]
  }

  sortDesc <AnyData>(items:Array<AnyData>,column:string){
    return [
      ...items.sort(
        (a:any,b:any)=>{
          if(typeof a[column] === 'string'){
            return (a[column].toUpperCase() > b[column].toUpperCase())?-1:1;
          }
          return b[column]-a[column];
        }
     )
    ]
  }
}
