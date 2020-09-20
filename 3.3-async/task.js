'use strict';
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, callId) {
        if (callId === undefined) {
            throw new Error('error text')
        }
        if (this.alarmCollection.some(alarm => callId === alarm.id)){
            console.error();
            return
        } else {
            let obj = {};
            obj.id = callId;
            obj.time = time;
            obj.callback = callback;
            this.alarmCollection.push(obj);
        }

    }

    removeClock(callId) {
        const sameIndex = this.alarmCollection.findIndex(alarm => callId === alarm.id);
        if (sameIndex >= 0) {
            this.alarmCollection.splice(sameIndex, 1);
            return true;
        } else return false;

    }

    getCurrentFormattedTime() {
        let currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return (`${hours}:${minutes}`);
    }

    start() {
        if (this.timerId === null) {
            let resultInterval = setInterval(() => this.alarmCollection.forEach(element => this.checkClock(element), 30000));
            this.timerId = resultInterval;
        }
    }

    checkClock(alarm) {
        if (this.getCurrentFormattedTime() === alarm.time) {
            return alarm.callback();
        } else {
            console.log("have time");
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(element => console.log(element.id + " и " + element.time));
    }
    clearAlarms() {
        stop();
        this.alarmCollection.forEach(element => this.alarmCollection.splice(0));
    }
}
function testCase() {
    let clock = new AlarmClock();
    clock.addClock("23:59", () => {console.log('пора вставать')}, 1);
    clock.addClock("23:43", () => {console.log('пора'); clock.removeClock(2)}, 2);
    clock.addClock("23:44", () => {console.log('теперь точно'); clock.stop(); clock.clearAlarms(); clock.printAlarms()}, 3);
    clock.printAlarms();
    clock.start();
}
