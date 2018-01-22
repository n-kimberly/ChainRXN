import React, { Component } from 'react';
import TimerHeader from '../TimerHeader/components/TimerHeader';
import TimerDisplay from '../TimerDisplay/components/TimerDisplay';
import TimerControls from '../TimerControls/components/TimerControls';
import TimerSet from '../TimerSet/components/TimerSet';
import moment from 'moment';
import * as timerStates from '../timerStates';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25, 'minutes'),
            timerState: timerStates.RESETTED,
            timer: null
        };
        this.setTime = this.setTime.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.reduceTimer = this.reduceTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.completeTimer = this.completeTimer.bind(this);
    }
    
    setTime(newBaseTime) {
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime,
            timerState: timerStates.RESETTED,
            timer: null
        });
    }

    resetTimer() {
        console.log("stopped...");
        if (this.state.timer) {
            clearInterval((this.state.timer));
        }
        this.setState({
            timerState: timerStates.RESETTED,
            timer: null,
            currentTime: moment.duration(this.state.baseTime)
        });
    }

    startTimer() {
        console.log("counting down...");
        this.setState({
            timerState: timerStates.PLAYING,
            timer: setInterval(this.reduceTimer, 1000)
        });
        this.reduceTimer();
    }

    reduceTimer() {
        let newTime = moment.duration(this.state.currentTime);
        if (newTime.get('minutes') === 0 && newTime.get('seconds') < 1) {
            this.completeTimer();
        } else {
            newTime.subtract(1, 'seconds');
            this.setState({
                currentTime: newTime
            });
            console.log(this.state.currentTime);
        };
    }

    pauseTimer() {
        console.log("pause now");
        if (this.state.timer) {
            clearInterval((this.state.timer));
        }
        this.setState({
            timerState: timerStates.PAUSED,
            timer: null
        });
    }

    completeTimer() {
        console.log("completed");
        clearInterval((this.state.timer));
        this.setState({
            timerState: timerStates.COMPLETED,
            timer: null
        });
    }

    render() 
    {
        return (
            <div className = "container-fluid">
                {/* <TimerHeader /> */}
                <TimerDisplay 
                    currentTime = { this.state.currentTime } />
                <TimerControls 
                    pauseTimer = { this.pauseTimer }
                    startTimer = { this.startTimer }
                    resetTimer = { this.resetTimer }
                    setTime = { this.setTime }
                    timerStates = { timerStates }
                    timerState = { this.state.timerState } />
                {
                    (this.state.timerState !== timerStates.PLAYING)
                    &&
                    (<TimerSet 
                        baseTime = { this.state.baseTime }
                        setTime = { this.setTime } />)
                }
            </div>
        );
    }
};
export default Timer;