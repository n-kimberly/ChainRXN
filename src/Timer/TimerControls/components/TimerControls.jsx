import React, { Component } from 'react';

class TimerControls extends Component {
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
                            className = "glyphicon glyphicon-chevron-left" />)
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
                            className = "glyphicon glyphicon-chevron-right" />)
                    }
                </div>
            </div>
        );
    }
}

export default TimerControls