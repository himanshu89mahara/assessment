import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountDownTimer } from '../count-down-timer.model';
import { CountDownTimerService } from '../services/count-down-timer.service';

@Component({
  selector: 'app-count-down-timer-display-subject',
  templateUrl: './templates/timer-display.template.html',
  styleUrls: ['./styles/timer-display.style.scss']
})
export class CountDownTimerDisplaySubjectComponent implements OnInit, OnDestroy {
  timer:number = 0;
  subscription!: Subscription;
  constructor(private countDownTimerServ:CountDownTimerService) { }

  ngOnInit(): void {
    this.subscription = this.countDownTimerServ.get().subscribe((res:CountDownTimer)=>{
      this.timer = res.countDown;
    });
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
