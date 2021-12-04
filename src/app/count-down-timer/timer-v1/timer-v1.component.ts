import { Component, OnInit } from '@angular/core';
import {initializeCountDownTimer,CountDownTimer,CountDownTimerLog} from '../count-down-timer.model';

@Component({
  selector: 'app-timer-v1',
  templateUrl: './timer-v1.component.html',
  styleUrls: ['./timer-v1.component.scss']
})
export class TimerV1Component {
  countDownTimer:CountDownTimer = initializeCountDownTimer();
  constructor() { }

  reset(){}

  getTimerData(newCountDownTimer:CountDownTimer){
    this.countDownTimer = newCountDownTimer;
  }

}
