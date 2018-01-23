import React, { Component } from 'react';

class TaskbarDisplay extends Component {
    render() {
      const routine = this.props.routine;
      const timerName = routine.timerName;
      const timerAllocation = routine.timerAllocation;
      const timerType = routine.timerType;
      return (
        <div className = "routines">
          <li>{timerType}: {timerName} ({timerAllocation} minutes)</li>
        </div>
      );
    }
}
  
export default TaskbarDisplay;