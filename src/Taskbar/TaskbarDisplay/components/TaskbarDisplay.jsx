import React, { Component } from 'react';

class TaskbarDisplay extends Component {
    render() {
      const routine = this.props.routine;
      const timerName = routine.timerName;
      const timerAllocation = routine.timerAllocation;
      const timerType = routine.timerType;
      return (
        <div className = "routines">
          <div className = "list-group-item">
          {
            (routine.isCurrent)
            && 
            (
              <button className = "btn btn-link" style={{color:'DarkGoldenRod'}}>
                {timerType}: {timerName} ({timerAllocation} minutes)
              </button>
            )
          }
          {
            (!routine.isCurrent)
            && 
            (
              <button className = "btn btn-link" style={{color:'gray'}}>
                {timerType}: {timerName} ({timerAllocation} minutes)
              </button>
            )
          }
          </div>
        </div>
      );
    }
}
  
export default TaskbarDisplay;
