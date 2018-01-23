// Component is nondefault export of React, which is a default export of 'react'
import React, {Component} from 'react';

class TasklogDisplay extends Component {
    render() {
        return (
            <div className = "list-group-item">
                <input 
                    type="checkbox" 
                    checked={ this.props.isCompleted } 
                    onChange={ this.props.toggleComplete } />
                {
                    (this.props.isCompleted)
                    && 
                    (
                    <span style={{color:'gray'}}>
                        <span className = "check-margin10">
                            { this.props.description }
                        </span>
                    </span>
                    )
                }
                {
                    (!this.props.isCompleted)
                    && 
                    (
                    <span> 
                        <span className = "check-margin10">
                            { this.props.description }
                        </span>
                    </span>
                    )
                }
                <div className = "pull-right" style = {{color:'black'}}>
                    <button 
                        onClick={ this.props.delete } 
                        className="glyphicon glyphicon-remove" />
                </div>
            </div>
        );
    }
}

export default TasklogDisplay;