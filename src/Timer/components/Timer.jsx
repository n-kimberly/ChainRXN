import React, { Component } from 'react';
import TimerHeader from '../TimerHeader/components/TimerHeader';
import TimerDisplay from '../TimerDisplay/components/TimerDisplay';
import TimerControls from '../TimerControls/components/TimerControls';
import TimerSet from '../TimerSet/components/TimerSet';
import moment from 'moment';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25, 'minutes')
        };
        this.setTime = this.setTime.bind(this);
    }
    
    setTime(newBaseTime) {
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime
        });
    }

    render() 
    {
        return (
            <div className = "container-fluid">
                <TimerHeader />
                <TimerDisplay 
                    currentTime = { this.state.currentTime }/>
                <TimerControls />
                <TimerSet 
                    baseTime = { this.state.baseTime }
                    setTime = {this.setTime} />
            </div>
        );
    }
};
export default Timer;