import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { SortDirective } from './directives/sort.directive';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SortPipe,
    SortDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SortPipe,
    SortDirective,
    HeaderComponent
  ]
})
export class SharedModule { }
