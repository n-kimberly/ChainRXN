// Component is nondefault export of React, which is a default export of 'react'
import React, {Component} from 'react';

class TasklogDisplay extends Component {
    render() {
        return (
            <li>
                <input 
                    type="checkbox" 
                    checked={ this.props.isCompleted } 
                    onChange={ this.props.toggleComplete } />
                <span>{ this.props.description }</span>
                <button onClick={ this.props.delete }>X</button>
            </li>
        );
    }
}

export default TasklogDisplay;