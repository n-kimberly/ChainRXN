import React from 'react';

const leftPad = (val) => {
    if (val < 10) {
        return '0' + val;
    } else {
        return val;
    }
}

const TaskbarDisplay = (props) => (
    <div className = "navbar navbar-default center">
        <div className = "navbar-inner">
            <ul className = "nav navbar-nav">
                <li><a href="#">W1 </a></li>
                <li><a href="#">B1 </a></li>
                <li><a href="#">W2 </a></li>
                <li><a href="#">B2 </a></li>
                <li><a href="#">W3 </a></li>
                <li><a href="#">B3 </a></li>
                <li><a href="#">W4 </a></li>
                <li><a href="#">B4 </a></li>
            </ul>
        </div>
    </div>
);

export default TaskbarDisplay;