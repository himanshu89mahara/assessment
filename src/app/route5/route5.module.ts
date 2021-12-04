import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route5RoutingModule } from './route5-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    Route5RoutingModule,
    SharedModule
  ]
})
export class Route5Module { }
