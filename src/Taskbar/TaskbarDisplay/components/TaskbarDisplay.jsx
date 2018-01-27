import React, { Component } from 'react';

class TaskbarDisplay extends Component {

    render() {
      
      const currentTimer = this.props.currentTimer;
      const currentTimerID = currentTimer.ID;

      const routine = this.props.routine;
      const ID = routine.ID;

      const timerAllocation = routine.timerAllocation;
      const timerType = routine.timerType;

      return (
        <div className = "routines">
          <div className = "list-group-item">
          {
            (ID === currentTimerID)
            && 
            (
              <button className = "btn btn-link" style={{color:'DarkGoldenRod'}}>
                Period {ID}: {timerType} for {timerAllocation} minutes
              </button>
            )
          }
          {
            (ID !== currentTimerID )
            && 
            (
              <button className = "btn btn-link" style={{color:'gray'}}>
                Period {ID}: {timerType} for {timerAllocation} minutes
              </button>
            )
          }
          </div>
        </div>
      );
    }
}
  
export default TaskbarDisplay;
