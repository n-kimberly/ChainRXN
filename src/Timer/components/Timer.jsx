import React, { Component } from 'react';
import TimerDisplay from '../TimerDisplay/components/TimerDisplay';
import TimerControls from '../TimerControls/components/TimerControls';
import TimerSet from '../TimerSet/components/TimerSet';
import * as timerStates from '../timerStates';


class Timer extends Component {
    render() 
    {
        return (
            <div className = "container-fluid">
                <TimerDisplay 
                    currentTime = { this.props.currentTime } />
                <TimerControls 
                    routines = { this.props.routines }
                    currentTimer = { this.props.currentTimer }
                    baseTime = { this.props.baseTime }
                    currentTime = { this.props.currentTime }
                    timerStates = { this.props.timerStates }
                    timerState = { this.props.timerState }
                    timer = { this.props.timer }
                    nextTimer = { this.props.nextTimer }
                    prevTimer = { this.props.prevTimer }
                    setTime = { this.props.setTime }
                    resetTimer = { this.props.resetTimer }
                    startTimer = { this.props.startTimer }
                    reduceTimer = { this.props.reduceTimer }
                    pauseTimer = { this.props.pauseTimer }
                    completeTimer = { this.props.completeTimer } />
                {
                    (this.props.timerState !== timerStates.PLAYING)
                    &&
                    (<TimerSet 
                        baseTime = { this.props.baseTime }
                        setTime = { this.props.setTime } />)
                }
            </div>
        );
    }
};
export default Timer;