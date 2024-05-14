class AlarmClock {
    constructor() {
        this.allarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callBack) {
        if (!time || !callBack) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.allarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        const newAlarm = {
            time,
            callBack,
            canCall: true
        };

        this.allarmCollection.push(newAlarm);
    }

    removeClock(time) {
        this.allarmCollection = this.allarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();

        return `${currentDate.getHours}:${currentDate.getMinutes}`;
    } 

    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();

            this.allarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callBack();
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.allarmCollection.forEach(alarm => {
            alarm.canCall = true
        });
    }

    clearAlarms() {
        this.stop();
        this.allarmCollection = [];
    }
}
