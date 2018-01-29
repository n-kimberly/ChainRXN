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
                    timerStates = { this.props.timerStates }
                    timerState = { this.props.timerState }
                    nextTimer = { this.props.nextTimer }
                    prevTimer = { this.props.prevTimer }
                    resetTimer = { this.props.resetTimer }
                    startTimer = { this.props.startTimer }
                    pauseTimer = { this.props.pauseTimer } />
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