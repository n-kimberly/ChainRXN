import React, { Component } from 'react';
import Timer from './Timer/components/Timer';
import Taskbar from './Taskbar/components/Taskbar';
import Tasklog from './Tasklog/components/Tasklog';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.routines = [
      {timerType: 'Work', isCurrent: true, timerName: 'Period 1', timerAllocation: 25},
      {timerType: 'Break', isCurrent: false,  timerName: 'Period 2', timerAllocation: 5},
      {timerType: 'Work', isCurrent: false, timerName: 'Period 3', timerAllocation: 25},
      {timerType: 'Break', isCurrent: false, timerName: 'Period 4', timerAllocation: 5},
      {timerType: 'Work', isCurrent: false, timerName: 'Period 5', timerAllocation: 25},
      {timerType: 'Break', isCurrent: false, timerName: 'Period 6', timerAllocation: 5},
      {timerType: 'Work', isCurrent: false, timerName: 'Period 7', timerAllocation: 25},
      {timerType: 'Break', isCurrent: false, timerName: 'Period 8', timerAllocation: 30}
    ];
  }

  render() {
    return (
      <div> 
        <div className = "panel panel-primary app-content center-block">
          <h1 className = "panel-heading">Chain Rxn</h1>
          <div className = "panel panel-default">
            <h2 className = "panel-heading" align="center">Timer</h2>
            <div className = "panel-body">
              <Timer 
                routines = { this.routines } 
              />
            </div>
            <div className = "panel-body">
              <Taskbar 
                routines = { this.routines } 
              />
            </div>
          </div>
          <div className = "panel panel-default">
            <h2 className = "panel-heading" align="center">Log</h2>
            <div className = "panel-body">
              <Tasklog />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
