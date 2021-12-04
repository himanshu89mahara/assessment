import { Component, Input } from '@angular/core';
import {CountDownTimerLog} from '../count-down-timer.model';

@Component({
  selector: 'app-count-down-timer-log',
  templateUrl: './templates/timer-log.template.html',
  styleUrls: ['./styles/timer-log.style.scss']
})
export class CountDownTimerLogComponent{
  @Input() timerLogs:CountDownTimerLog[] = [];

  constructor() { }
}
