import React, { Component } from 'react';
import moment from 'moment';

class TimerControls extends Component {
    constructor() {
        super();
        this.nextTimer = this.nextTimer.bind(this);
    }

    nextTimer() {
        const nextTime = moment.duration(5, 'minutes');
        console.log(nextTime);
        this.props.setTime(nextTime);
    }

    render()
    {
        return (
            <div className = "row">
                <div className = "text-center">
                    {
                        (this.props.timerState === this.props.timerStates.COMPLETED ||
                        this.props.timerState ===
                        this.props.timerStates.RESETTED)
                        &&
                        (<button 
                            className = "glyphicon glyphicon-chevron-left" 
                            onClick = { this.props.resetTimer } />)
                    }
                    {
                        (this.props.timerState === this.props.timerStates.PLAYING)
                        &&
                        (<button 
                            className = "glyphicon glyphicon-pause" 
                            onClick = { this.props.pauseTimer } />)
                    }
                    {
                        (this.props.timerState !== this.props.timerStates.PLAYING)
                        &&
                        (<button 
                            className = "glyphicon glyphicon-play"
                            onClick = { this.props.startTimer } />)
                    }
                    {
                        (this.props.timerState === this.props.timerStates.PLAYING ||
                        this.props.timerState ===
                        this.props.timerStates.PAUSED)
                        &&
                        (<button 
                            className = "glyphicon glyphicon-stop" 
                            onClick = { this.props.resetTimer } />)
                    }
                    {
                        (this.props.timerState === this.props.timerStates.COMPLETED ||
                        this.props.timerState ===
                        this.props.timerStates.RESETTED)
                        &&
                        (<button 
                            className = "glyphicon glyphicon-chevron-right" onClick = { this.nextTimer } />)
                    }
                </div>
            </div>
        );
    }
}

// const TimerControls = (props) => (
//     <div className = "row">
//         <div className = "text-center">
//             <button className = "glyphicon glyphicon-chevron-left align-center"></button>
//             <button className = "glyphicon glyphicon-pause"></button>
//             <button 
//                 className = "glyphicon glyphicon-play"
//                 onClick = {this.props.startTimer} />
//             <button className = "glyphicon glyphicon-stop"></button>
//             <button className = "glyphicon glyphicon-chevron-right"></button>
//         </div>
//     </div>
// );

export default TimerControls