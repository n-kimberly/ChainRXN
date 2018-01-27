import React, { Component } from 'react';
import Timer from './Timer/components/Timer';
import Taskbar from './Taskbar/components/Taskbar';
import Tasklog from './Tasklog/components/Tasklog';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.routines = [
      {ID: 1, timerType: 'Work', timerAllocation: 25},
      {ID: 2, timerType: 'Break', timerAllocation: 5},
      {ID: 3, timerType: 'Work', timerAllocation: 25},
      {ID: 4, timerType: 'Break', timerAllocation: 5},
      {ID: 5, timerType: 'Work', timerAllocation: 25},
      {ID: 6, timerType: 'Break', timerAllocation: 5},
      {ID: 7, timerType: 'Work', timerAllocation: 25},
      {ID: 8, timerType: 'Break', timerAllocation: 30}
    ];
    this.state = {
      currentTimer: this.routines[0]
    };
  };

  render() {

    return (
      <div className = "container">
        <div className = "page-header"> 
          <h1>Chain Rxn</h1>
            <small> Control your productivity with this ReactJS application. </small>
        </div>
        <div className = "panel panel-default app-content center-block">
          <h2 className = "panel-heading" align="center">Timer</h2>
          <div className = "panel-body">
            <Timer 
              currentTimer = { this.state.currentTimer }
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
          <h2 className = "panel-heading" align="center">Log</h2>
          <div className = "panel-body">
              <Tasklog />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
