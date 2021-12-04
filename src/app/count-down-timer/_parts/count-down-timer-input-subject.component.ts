import { Component, OnDestroy } from '@angular/core';
import {BaseCountDownTimer} from '../Abstract/BaseCountDownTimer.class';
import { CountDownTimerService } from '../services/count-down-timer.service';
@Component({
  selector: 'app-count-down-timer-input-subject',
  templateUrl: './templates/timer-input.template.html',
  styleUrls: ['./styles/timer-input.style.scss']
})


export class CountDownTimerInputSubjectComponent extends BaseCountDownTimer implements OnDestroy{
  constructor(private countDownTimerServ:CountDownTimerService) {
    super();
  }
  emit(){
    this.countDownTimerServ.send(this.countDownTimer);
  }
  ngOnDestroy(){
    clearInterval(this.TimerIntervalObj);
  }

}
