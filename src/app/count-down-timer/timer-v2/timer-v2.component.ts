import { Component, OnInit } from '@angular/core';
import { CountDownTimer, initializeCountDownTimer } from '../count-down-timer.model';

@Component({
  selector: 'app-timer-v2',
  templateUrl: './timer-v2.component.html',
  styleUrls: ['../timer-v1/timer-v1.component.scss']
})
export class TimerV2Component {
  countDownTimer:CountDownTimer = initializeCountDownTimer();
  constructor() { }
  
  getTimerData(newCountDownTimer:CountDownTimer){
    this.countDownTimer = newCountDownTimer;
  }

}
