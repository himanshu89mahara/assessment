import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

import {CountDownTimer,initializeCountDownTimer} from '../count-down-timer.model';

@Injectable({
  providedIn: 'root'
})
export class CountDownTimerService {
  private countDownTimerSubject:Subject<CountDownTimer> = new Subject <CountDownTimer>();

  constructor() {
    this.countDownTimerSubject.next(initializeCountDownTimer());
  }

  get(){
    return this.countDownTimerSubject;
  }

  send(data:CountDownTimer){
    this.countDownTimerSubject.next(data);
  }
}
