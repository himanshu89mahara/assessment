
export type CountDownTimer = {
    countDown:number;
    status:number; //0-pause, 1- started, -1 - reset
    logs:CountDownTimerLog[];
    startedCounter:number;
    pausedCounter:number;
    eventTrackLogs:string[];

}

export type CountDownTimerLog = {
    status:number,
    statusName:string,
    date:Date
}

export function initializeCountDownTimer(){
    return {
        countDown:0,
        status:-1, //0-pause, 1- started, -1 - reset
        logs:[],
        startedCounter:0,
        pausedCounter:0,
        eventTrackLogs:[]
      };
}

export function restCountDownTimer(){
    return {
        countDown:0,
        status:-1, //0-pause, 1- started, -1 - reset
        eventTrackLogs:[]
    };
}