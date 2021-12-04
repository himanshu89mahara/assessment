import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-timer-display',
  templateUrl: './templates/timer-display.template.html',
  styleUrls: ['./styles/timer-display.style.scss']
})
export class CountDownTimerDisplayComponent {
  @Input() timer: number= 0;

  constructor() { }
}
