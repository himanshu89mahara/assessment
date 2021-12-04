import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivRoutingModule } from './dynamic-div-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DynamicDivComponent } from './dynamic-div.component';



@NgModule({
  declarations: [DynamicDivComponent],
  imports: [
    CommonModule,
    DynamicDivRoutingModule,
    SharedModule,
    FormsModule,
    
  ]
})
export class DynamicDivModule { }
