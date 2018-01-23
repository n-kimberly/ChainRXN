import React, { Component } from 'react';
import TaskbarDisplay from '../TaskbarDisplay/components/TaskbarDisplay';

class Taskbar extends Component {
    render() 
    {
        const rows = [];
        this.props.routines.forEach(routine => {
            rows.push(
                <TaskbarDisplay 
                    routine = { routine }
                    key = {routine.timerName}
                />
            );
        });
        return (
            <div className = "container-fluid">
                <div className = "navbar navbar-default">
                    <div className = "navbar-inner">
                        <ul className = "nav navbar-nav">
                            {rows}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};
export default Taskbar;