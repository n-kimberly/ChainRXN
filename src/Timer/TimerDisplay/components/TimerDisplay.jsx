import React from 'react';

const TimerDisplay = (props) => (
    <div className = "row" >
        <h2 class = "text-center">
            {props.currentTime.get('hours')}:{props.currentTime.get('minutes')}:{props.currentTime.get('seconds')}
        </h2>
    </div>
);

export default TimerDisplay;