import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CountDownTimer, CountDownTimerLog} from '../count-down-timer.model';
import { CountDownTimerService } from '../services/count-down-timer.service';

@Component({
  selector: 'app-count-down-timer-log-subject',
  templateUrl: './templates/timer-log.template.html',
  styleUrls: ['./styles/timer-log.style.scss']
})
export class CountDownTimerLogSubjectComponent implements OnInit, OnDestroy{
  timerLogs:CountDownTimerLog[] = [];
  subscription: Subscription = new Subscription;
  constructor(
    private countDownTimerServ:CountDownTimerService
  ) { }

  ngOnInit(){
    this.subscription = this.countDownTimerServ.get().subscribe((data:CountDownTimer)=>{
      this.timerLogs = data.logs;
    });

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
