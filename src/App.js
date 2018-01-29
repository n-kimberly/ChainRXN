import React, { Component } from 'react';
import Timer from './Timer/components/Timer';
import * as timerStates from './Timer/timerStates';
import moment from 'moment';
import Taskbar from './Taskbar/components/Taskbar';
import Tasklog from './Tasklog/components/Tasklog';
import './App.css';

class App extends Component {

  constructor(props) {
    
    super(props);

    this.i = 0;
    
    this.routines = [
      {ID: 1, timerType: 'Work', timerAllocation: 25},
      {ID: 2, timerType: 'Play', timerAllocation: 5},
      {ID: 3, timerType: 'Work', timerAllocation: 25},
      {ID: 4, timerType: 'Play', timerAllocation: 5},
      {ID: 5, timerType: 'Work', timerAllocation: 25},
      {ID: 6, timerType: 'Play', timerAllocation: 5},
      {ID: 7, timerType: 'Work', timerAllocation: 25},
      {ID: 8, timerType: 'Play', timerAllocation: 30}
    ];
    
    this.state = {
      currentTimer: this.routines[this.i],
      baseTime: moment.duration(this.routines[this.i].timerAllocation, 'minutes'),
      currentTime: moment.duration(this.routines[this.i].timerAllocation, 'minutes'),
      timerState: timerStates.RESETTED,
      timer: null
    };
    
    this.nextTimer = this.nextTimer.bind(this);
    this.prevTimer = this.prevTimer.bind(this);
    this.setTime = this.setTime.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.completeTimer = this.completeTimer.bind(this);

  };

  nextTimer() {
    if (this.i < this.routines.length - 1) {
      this.i = this.i + 1;
    } else {
      this.i = this.i - (this.routines.length-1);
    }
    console.log(this.i);
    this.setState({
      currentTimer: this.routines[this.i],
      baseTime: moment.duration(this.routines[this.i].timerAllocation, 'minutes'),
      currentTime: moment.duration(this.routines[this.i].timerAllocation, 'minutes'),
      timerState: timerStates.RESETTED,
      timer: null
    });
  }

  prevTimer() {
    if (this.i > 0 ) {
      this.i = this.i - 1;
    } else {
      this.i = this.i + (this.routines.length-1);
    }
    console.log(this.i);
    this.setState({
      currentTimer: this.routines[this.i],
      baseTime: moment.duration(this.routines[this.i].timerAllocation, 'minutes'),
      currentTime: moment.duration(this.routines[this.i].timerAllocation, 'minutes'),
      timerState: timerStates.RESETTED,
      timer: null
    });
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
        currentTime: moment.duration(this.state.baseTime, 'minutes')
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

  render() {

    return (
      <div className = "container">
        <div className = "page-header"> 
          <h1>Chain Rxn</h1>
            <small> Control your productivity with this ReactJS application. </small>
        </div>
        <div className = "panel panel-default app-content center-block">
          <h2 className = "panel-heading" align="center">
            Timer
            <div className = "panel-title" align="right">
              <small><em>Control, modify, and index through timers.</em></small>
            </div>
          </h2>
          <div className = "panel-body">
            <Timer 
              routines = { this.routines }
              currentTimer = { this.state.currentTimer }
              baseTime = { this.state.baseTime }
              currentTime = { this.state.currentTime }
              timerStates = { timerStates }
              timerState = { this.state.timerState }
              timer = { this.state.timer }
              nextTimer = { this.nextTimer }
              prevTimer = { this.prevTimer }
              setTime = { this.setTime }
              resetTimer = { this.resetTimer }
              startTimer = { this.startTimer }
              reduceTimer = { this.reduceTimer }
              pauseTimer = { this.pauseTimer }
              completeTimer = { this.completeTimer }
            />
          </div>
          <div className = "panel-body">
            <Taskbar 
              routines = { this.routines } 
              currentTimer = { this.state.currentTimer }
            />
          </div>
        </div>
        <div className = "panel panel-default app-content center-block">
          <h2 className = "panel-heading" align="center">
            Log
            <div className = "panel-title" align="right">
              <small><em>Manage task history and goals.</em></small>
            </div>
          </h2>  
          <div className = "panel-body">
          
            <Tasklog 
              i = { this.i }
              routines = { this.routines } 
              currentTimer = { this.state.currentTimer }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
