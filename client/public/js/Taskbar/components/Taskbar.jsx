import React, { Component } from 'react';
import TaskbarDisplay from '../TaskbarDisplay/components/TaskbarDisplay.jsx';

class Taskbar extends Component {
    render() 
    {
        const currentTimer = this.props.currentTimer;
        const rows = [];
        this.props.routines.forEach(routine => {
            rows.push(
                <TaskbarDisplay 
                    routine = { routine }
                    key = { routine.ID }
                    currentTimer = { currentTimer }
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