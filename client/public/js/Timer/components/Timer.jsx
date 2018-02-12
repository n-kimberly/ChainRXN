import React, { Component } from 'react';
import TimerDisplay from '../TimerDisplay/components/TimerDisplay.jsx';
import TimerControls from '../TimerControls/components/TimerControls.jsx';
import TimerSet from '../TimerSet/components/TimerSet.jsx';

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
                <TimerSet 
                    timerStates = { this.props.timerStates }
                    timerState = { this.props.timerState }
                    currentTimer = { this.props.currentTimer }
                    baseTime = { this.props.baseTime }
                    setTime = { this.props.setTime } />
            </div>
        );
    }
};
export default Timer;
