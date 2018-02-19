import React, { Component } from 'react';
import Sound from 'react-sound';
import Timer from './Timer/components/Timer.jsx';
import * as timerStates from './Timer/timerStates';
import moment from 'moment';
import Taskbar from './Taskbar/components/Taskbar.jsx';
import Tasklog from './Tasklog/components/Tasklog.jsx';
// import '../css/index.css';

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
      playerState: Sound.status.STOPPED,
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
      playerState: Sound.status.STOPPED,
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
      playerState: Sound.status.STOPPED,
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
      playerState: Sound.status.STOPPED,
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
      playerState: Sound.status.STOPPED,
      timerState: timerStates.RESETTED,
      timer: null,
      currentTime: moment.duration(this.state.baseTime, 'minutes')
    });
  }

  startTimer() {
    console.log("counting down...");
    this.setState({
      playerState: Sound.status.STOPPED,
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
      playerState: Sound.status.STOPPED,
      timerState: timerStates.PAUSED,
      timer: null
    });
  }

  completeTimer() {
    console.log("completed");
    clearInterval((this.state.timer));
    this.setState({
      playerState: Sound.status.PLAYING,
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
        <div className = "col-md-12">
          <div className = "panel panel-default app-content center-block">
            <h2 className = "panel-heading" align="center">
              Timer
              <div className = "panel-title" align="right">
                <small><em>Control, modify, and index through timers.</em></small>
              </div>
            </h2>
            <div className = "panel-body">
              <Timer 
                baseTime = { this.state.baseTime }
                currentTimer = { this.state.currentTimer }
                currentTime = { this.state.currentTime }
                timerStates = { timerStates }
                timerState = { this.state.timerState }
                nextTimer = { this.nextTimer }
                prevTimer = { this.prevTimer }
                setTime = { this.setTime }
                resetTimer = { this.resetTimer }
                startTimer = { this.startTimer }
                pauseTimer = { this.pauseTimer }
              />
              <Sound
                url ="/dist/chirp.mp3"
                playStatus = { this.state.playerState }
                onFinishedPlaying = { this.resetTimer }
              />
            </div>
          </div>
        </div>
        <div className = "col-md-6">
          <div className = "panel panel-default app-content center-block">
            <h2 className = "panel-heading" align="center">
              Sequence
              <div className = "panel-title" align="right">
                <small><em>Ability to edit sequence coming soon.</em></small>
              </div>
            </h2>
            <div className = "panel-body">
              <Taskbar 
                routines = { this.routines } 
                currentTimer = { this.state.currentTimer }
              />
            </div>
          </div>
        </div>
        <div className = "col-md-6">
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
      </div>
    );
  }
}

export default App;
