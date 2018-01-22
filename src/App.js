import React, { Component } from 'react';
import Timer from './Timer/components/Timer';
import Taskbar from './Taskbar/components/Taskbar';
import Tasklog from './Tasklog/components/Tasklog';
import './App.css';


class App extends Component {
  render() {
    return (
      <div> 
        <div className = "panel panel-primary app-content center-block">
          <h1 className = "panel-heading">Chain Rxn</h1>
          <div className = "panel panel-default">
            <h2 className = "panel-heading" align="center">Timer</h2>
            <div className = "panel-body">
              <Timer />
            </div>
            <div className = "panel-body">
              <Taskbar />
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
