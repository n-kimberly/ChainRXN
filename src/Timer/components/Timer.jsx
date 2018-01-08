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
            timerState: timerStates.RESETTED
        };
        this.setTime = this.setTime.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.completeTimer = this.completeTimer.bind(this);
    }
    
    setTime(newBaseTime) {
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime,
        });
    }

    resetTimer() {
        this.setState({
            timerState: timerStates.RESETTED
        })
    }

    startTimer() {
        this.setState({
            timerState: timerStates.PLAYING
        })
        this.reduceTimer();
    }

    reduceTimer() {
        console.log("counting down");
    }

    pauseTimer() {
        this.setState({
            timerState: timerStates.PAUSED
        })
    }

    completeTimer() {
        this.setState({
            timerState: timerStates.COMPLETED
        })
    }

    render() 
    {
        return (
            <div className = "container-fluid">
                <TimerHeader />
                <TimerDisplay 
                    currentTime = { this.state.currentTime } />
                <TimerControls 
                    pauseTimer = { this.pauseTimer }
                    startTimer = { this.startTimer }
                    resetTimer = { this.resetTimer } 
                    timerStates = { timerStates }
                    timerState = { this.state.timerState } />
                {
                    (this.state.timerState !== timerStates.PLAYING)
                    &&
                    (<TimerSet 
                        baseTime = { this.state.baseTime }
                        setTime = {this.setTime} />)
                }
            </div>
        );
    }
};
export default Timer;