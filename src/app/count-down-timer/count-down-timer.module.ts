import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TimerV1Component } from './timer-v1/timer-v1.component';
import { TimerV2Component } from './timer-v2/timer-v2.component';
import { CountDownTimerRoutingModule } from './count-down-timer-routing.module';
import { CountDownTimerDisplayComponent } from './_parts/count-down-timer-display.component';
import { CountDownTimerInputComponent } from './_parts/count-down-timer-input.component';
import { CountDownTimerLogComponent } from './_parts/count-down-timer-log.component';
import { CountDownTimerCounterComponent } from './_parts/count-down-timer-counter.component';
import { CountDownTimerInputSubjectComponent } from './_parts/count-down-timer-input-subject.component';
import { CountDownTimerCounterSubjectComponent } from './_parts/count-down-timer-counter-subject.component';
import { CountDownTimerDisplaySubjectComponent } from './_parts/count-down-timer-display-subject.component';
import { CountDownTimerLogSubjectComponent } from './_parts/count-down-timer-log-subject.component';
import { CountDownTimerService } from './services/count-down-timer.service';



@NgModule({
  declarations: [TimerV1Component,TimerV2Component, CountDownTimerDisplayComponent, CountDownTimerInputComponent, CountDownTimerLogComponent, CountDownTimerCounterComponent,CountDownTimerInputSubjectComponent,CountDownTimerLogSubjectComponent,CountDownTimerDisplaySubjectComponent,CountDownTimerCounterSubjectComponent,
  ],
  imports: [
    CommonModule,
    CountDownTimerRoutingModule,
    FormsModule
  ],
  providers:[CountDownTimerService]
})
export class CountDownTimerModule { }
