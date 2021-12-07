import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { SortDirective } from './directives/sort.directive';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    SortPipe,
    SortDirective,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SortPipe,
    SortDirective,
    HeaderComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
