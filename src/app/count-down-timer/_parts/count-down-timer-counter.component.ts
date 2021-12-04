import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-timer-counter',
  templateUrl: './templates/timer-counter.template.html',
  styleUrls: ['./styles/timer-counter.style.scss']
})
export class CountDownTimerCounterComponent {
  @Input() startCounter:number = 0;
  @Input() pausedCounter:number = 0;

  constructor() { }
}
