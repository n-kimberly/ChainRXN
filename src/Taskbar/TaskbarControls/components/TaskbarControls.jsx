import React, { Component } from 'react';
import moment from 'moment';

class TaskbarControls extends Component {
    constructor() {
        super();
    }

    render()
    {
        return (
            <div className = "row">
                <div className = "text-center">
                    {
                        (this.props.TaskbarState === this.props.TaskbarStates.COMPLETED ||
                        this.props.TaskbarState ===
                        this.props.TaskbarStates.RESETTED)
                        &&
                        (<button 
                            className = "glyphicon glyphicon-chevron-left" />)
                    }
                    {
                        (this.props.TaskbarState === this.props.TaskbarStates.PLAYING)
                        &&
                        (<button 
                            className = "glyphicon glyphicon-pause" 
                            onClick = { this.props.pauseTaskbar } />)
                    }
                    {
                        (this.props.TaskbarState !== this.props.TaskbarStates.PLAYING)
                        &&
                        (<button 
                            className = "glyphicon glyphicon-play"
                            onClick = { this.props.startTaskbar } />)
                    }
                    {
                        (this.props.TaskbarState === this.props.TaskbarStates.PLAYING ||
                        this.props.TaskbarState ===
                        this.props.TaskbarStates.PAUSED)
                        &&
                        (<button 
                            className = "glyphicon glyphicon-stop" 
                            onClick = { this.props.resetTaskbar } />)
                    }
                    {
                        (this.props.TaskbarState === this.props.TaskbarStates.COMPLETED ||
                        this.props.TaskbarState ===
                        this.props.TaskbarStates.RESETTED)
                        &&
                        (<button 
                            className = "glyphicon glyphicon-chevron-right" />)
                    }
                </div>
            </div>
        );
    }
}

// const TaskbarControls = (props) => (
//     <div className = "row">
//         <div className = "text-center">
//             <button className = "glyphicon glyphicon-chevron-left align-center"></button>
//             <button className = "glyphicon glyphicon-pause"></button>
//             <button 
//                 className = "glyphicon glyphicon-play"
//                 onClick = {this.props.startTaskbar} />
//             <button className = "glyphicon glyphicon-stop"></button>
//             <button className = "glyphicon glyphicon-chevron-right"></button>
//         </div>
//     </div>
// );

export default TaskbarControls