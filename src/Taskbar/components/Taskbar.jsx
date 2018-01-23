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
                <ul className="list-group">
                    {rows}
                </ul>
            </div>
        );
    }
};
export default Taskbar;