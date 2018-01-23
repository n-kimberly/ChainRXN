import React, { Component } from 'react';

class TaskbarDisplay extends Component {
    render() {
      const routine = this.props.routine;
      const timerName = routine.timerName;
      const timerAllocation = routine.timerAllocation;
      const timerType = routine.timerType;
      return (
        <div className = "routines">
          <li className = "list-group-item">
          {
            (routine.isCurrent)
            && 
            ( <span>
                {timerType}: {timerName} ({timerAllocation} minutes)
              </span>
            )
          }
          {
            (!routine.isCurrent)
            && 
            ( <span style={{color: 'gray'}}>
                {timerType}: {timerName} ({timerAllocation} minutes)
              </span>
            )
          }
          </li>
        </div>
      );
    }
}
  
export default TaskbarDisplay;