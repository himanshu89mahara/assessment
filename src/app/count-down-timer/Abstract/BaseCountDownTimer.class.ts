import {CountDownTimer,CountDownTimerLog,initializeCountDownTimer, restCountDownTimer} from
 '../count-down-timer.model';

export abstract class BaseCountDownTimer{
    countDownTimer:CountDownTimer = initializeCountDownTimer();
    TimerIntervalObj:any;

    changeStatus(newTimer:number){
        if(this.countDownTimer.countDown < 1){
            this.countDownTimer.countDown = newTimer;
        }
        if(this.countDownTimer.status==1){ //change to paused
            this.countDownTimer.status=0;
            this.countDownTimer.pausedCounter++;
            this.clearInterval();
            this.addEvent();
        }else{
            this.countDownTimer.status=1;
            this.countDownTimer.startedCounter++;
            this.addEvent();
            this.startInterval();
        }
        
        this.addLog();
        this.emit();
    }
    addEvent(){
        this.countDownTimer.eventTrackLogs.push(`${this.countDownTimer.status==1?'Started':'Paused'} at ${this.countDownTimer.countDown}`) ;
    }
    addLog(){
        this.countDownTimer.logs.push(<CountDownTimerLog>{
          status:this.countDownTimer.status,
          statusName:(this.countDownTimer.status==1)?'Started':'Paused',
          date: new Date()
        });
    }

    reset(){
        this.countDownTimer = {...this.countDownTimer,...restCountDownTimer()};
        this.clearInterval();
        this.emit();
    }
    
    timerInterval(){
        if(this.countDownTimer.status==1 && this.countDownTimer.countDown > 0){
            this.countDownTimer.countDown--;
            this.emit();
        }else{
          this.countDownTimer.status = 0;
        }
    }
    
    startInterval(){
        if(this.TimerIntervalObj === undefined){
            this.TimerIntervalObj = setInterval(this.timerInterval.bind(this),1000);
        }
    }
    
    clearInterval(){
        if(this.TimerIntervalObj !== undefined){
            clearInterval(this.TimerIntervalObj);
            this.TimerIntervalObj = undefined;
        }
    }

    abstract emit():void;
  
}