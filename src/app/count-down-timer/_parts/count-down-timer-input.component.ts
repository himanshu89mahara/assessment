import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import {CountDownTimer} from '../count-down-timer.model';
import {BaseCountDownTimer} from '../Abstract/BaseCountDownTimer.class';
@Component({
  selector: 'app-count-down-timer-input',
  templateUrl: './templates/timer-input.template.html',
  styleUrls: ['./styles/timer-input.style.scss']
})


export class CountDownTimerInputComponent extends BaseCountDownTimer implements OnDestroy{
  @Output() afterChangeTimer = new EventEmitter<CountDownTimer>();
  constructor() {
    super();
  }
  emit(){
    this.afterChangeTimer.emit(this.countDownTimer);
  }

  ngOnDestroy(){
    this.clearInterval();
  }

}
