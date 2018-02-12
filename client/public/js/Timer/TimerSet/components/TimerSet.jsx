import React, { Component } from 'react';

class TimerSet extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        const newBaseTime = this.props.baseTime;
        // if (ev.target.id === 'hours') {
        //     newBaseTime
        //         .subtract(newBaseTime.get('hours'), 'hours')
        //         .add(parseInt(ev.target.value, 10), 'hours');
        // }
        if (ev.target.id === 'minutes') {
            console.log(ev.target.value);
            if (ev.target.value < 0 ) {
                ev.target.value = 0;
            }
            newBaseTime
                .subtract(newBaseTime.get('hours'), 'hours')
                .subtract(newBaseTime.get('minutes'), 'minutes')
                .subtract(newBaseTime.get('seconds'), 'seconds')
                .add(parseInt(ev.target.value, 10), 'minutes');
        }
        // if (ev.target.id === 'seconds') {
        //     newBaseTime
        //         .subtract(newBaseTime.get('seconds'), 'seconds')
        //         .add(parseInt(ev.target.value, 10), 'seconds');
        // }
        console.log(newBaseTime);
        this.props.setTime(newBaseTime);
    }

    render()
    {
        return (
            <div className = "row" >
                {/* <h4 className = "text-primary"> Set Timer</h4> */}
                {/* <div className = "row control-row" >
                    <div className = "form-group">
                        <div className = "col-sm-3">  
                        <label htmlFor = "hours"> Hours </label>
                        </div>
                        <div className = "col-sm-9">  
                        <input 
                            id = "hours" 
                            className = "form-control" 
                            type = "number" 
                            defaultValue = { this.props.baseTime.get('hours')}
                            onChange = { this.handleChange } />
                        </div>
                    </div>
                </div> */}
                <div className = "row control-row" >
                    {
                        (this.props.timerState !== this.props.timerStates.PLAYING)
                        &&
                        (
                        <div className = "form-group">
                            <h5 className = "col-sm-4" align = "right">  
                                <label htmlFor = "minutes"> Modify Timer (min.) </label>
                            </h5>
                            <div className = "col-sm-4">  
                            <input 
                                id = "minutes" 
                                className = "form-control" 
                                type = "number" 
                                onChange = { this.handleChange } />
                            </div>
                        </div>
                        )
                    }
                    {
                        (this.props.timerState === 
                            this.props.timerStates.RESETTED)
                        &&
                        (
                        <h6 align="center" style={{color:'DarkGoldenRod'}}>
                            {
                                (this.props.currentTimer.timerType === 'Work')
                                &&
                                <strong>{ this.props.currentTimer.timerType } for { this.props.currentTimer.timerAllocation } minutes </strong>
                            }
                            {
                                (this.props.currentTimer.timerType === 'Play')
                                &&
                                <em>{ this.props.currentTimer.timerType } for { this.props.currentTimer.timerAllocation } minutes </em>
                            }
                        </h6>
                        )
                    }
                    {
                        (this.props.timerState === 
                            this.props.timerStates.PLAYING)
                        &&
                        (
                            <h6 align="center" style={{color:'DarkGoldenRod'}}>
                                {
                                    (this.props.currentTimer.timerType === 'Work')
                                    &&
                                    <strong> Currently playing: { this.props.currentTimer.timerType } for { this.props.currentTimer.timerAllocation } minutes </strong>
                                }
                                {
                                    (this.props.currentTimer.timerType === 'Play')
                                    &&
                                    <em> Currently playing: { this.props.currentTimer.timerType } for { this.props.currentTimer.timerAllocation } minutes </em>
                                }
                            </h6>
                        )
                    }
                </div>
                {/* <div className = "row control-row" >
                    <div className = "form-group">
                        <div className = "col-sm-3">  
                        <label htmlFor = "seconds"> Seconds </label>
                        </div>
                        <div className = "col-sm-9">  
                        <input 
                            id = "seconds" 
                            className = "form-control" 
                            type = "number" 
                            defaultValue = { this.props.baseTime.get('seconds') }
                            onChange = { this.handleChange } />
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default TimerSet