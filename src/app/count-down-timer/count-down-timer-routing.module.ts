import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerV1Component } from './timer-v1/timer-v1.component';
import { TimerV2Component } from './timer-v2/timer-v2.component';

const routes: Routes = [
  {path:'count-down-timer2',component:TimerV2Component},
  {path:'count-down-timer1',component:TimerV1Component},
  {path:'',redirectTo:'count-down-timer1'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownTimerRoutingModule { }
