import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountDownTimer } from '../count-down-timer.model';
import { CountDownTimerService } from '../services/count-down-timer.service';

@Component({
  selector: 'app-count-down-timer-counter-subject',
  templateUrl: './templates/timer-counter.template.html',
  styleUrls: ['./styles/timer-counter.style.scss']
})
export class CountDownTimerCounterSubjectComponent implements OnInit, OnDestroy {
  startCounter:number = 0;
  pausedCounter:number = 0;
  subscription:Subscription = new Subscription;
  
  

  constructor(private countDownTimerServ: CountDownTimerService) { }

  ngOnInit(): void {
    this.subscription = this.countDownTimerServ.get().subscribe((data:CountDownTimer)=>{
      this.startCounter = data.startedCounter;
      this.pausedCounter = data.pausedCounter;
    });

  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();

  }

}
