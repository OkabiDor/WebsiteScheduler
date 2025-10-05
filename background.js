class Website {
    constructor(url, observer, time, dateToOpen, reaccuring) {
        this.url = url;
        this.time = time;
        this.observer = observer;
        this.dateToOpen = dateToOpen;
        this.reaccuring = reaccuring || false;

    }
    notify(){
        this.observer.Notify(this);
    }
    openWebsite(){
        if(this.shouldOpenToday()){
            var timeToOpen = calculateTimeToOpen(this.time);
            setTimeout(() => this.notify(), timeToOpen);
            this.openRepeatedly();
        }
        else{
            var millisTillOpen = this.countMilliSecondsToOpen();
            setTimeout(() => this.notify(), millisTillOpen);
           this.openRepeatedly();
        }
            
    }
    openRepeatedly(){
        if(this.reaccuring){
            setInterval(() => this.notify(), 7 * 24 * 60 * 60 * 1000);
        }
    }
    shouldOpenToday(){
        var currentDate = new Date();
        if(currentDate.getDate() === this.dateToOpen.getDate() && currentDate.getMonth() === this.dateToOpen.getMonth() && currentDate.getFullYear() === this.dateToOpen.getFullYear()){
            return true;
        }
    }
    countMilliSecondsToOpen(){ //returns 
        var currentDate = new Date();
        var timeDiff = this.dateToOpen.getTime() - currentDate.getTime();
        return timeDiff;
    }
}