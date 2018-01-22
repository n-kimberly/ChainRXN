import React, { Component } from 'react';
import TaskbarHeader from '../TaskbarHeader/components/TaskbarHeader';
import TaskbarDisplay from '../TaskbarDisplay/components/TaskbarDisplay';
import TaskbarControls from '../TaskbarControls/components/TaskbarControls';
import TaskbarSet from '../TaskbarSet/components/TaskbarSet';
import moment from 'moment';
import * as TaskbarStates from '../TaskbarStates';

class Taskbar extends Component {
    constructor() {
        super();
    }

    render() 
    {
        return (
            <div className = "container-fluid">
                {/* <TaskbarHeader /> */}
                <TaskbarDisplay />
                {/* <TaskbarControls 
                    pauseTaskbar = { this.pauseTaskbar }
                    startTaskbar = { this.startTaskbar }
                    resetTaskbar = { this.resetTaskbar }
                    setTime = { this.setTime }
                    TaskbarStates = { TaskbarStates }
                    TaskbarState = { this.state.TaskbarState } /> */}
                {/* {
                    (this.state.TaskbarState !== TaskbarStates.PLAYING)
                    &&
                    (<TaskbarSet 
                        baseTime = { this.state.baseTime }
                        setTime = { this.setTime } />)
                } */}
            </div>
        );
    }
};
export default Taskbar;