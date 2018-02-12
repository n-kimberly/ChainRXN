import React, { Component } from 'react';
import TasklogDisplay from '../TasklogDisplay/components/TasklogDisplay.jsx';

class Tasklog extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
              {description: 'Initialize Timer Design, Frontend', isCompleted: true, ID: 1},
              {description: 'Play piano', isCompleted: true, ID: 2},
              {description: 'Write Timer Reduce() method', isCompleted: true, ID: 3},
              {description: 'Play piano', isCompleted: true, ID: 4},
              {description: 'Enable Timer Play/Pause/Reset Methods', isCompleted: true, ID: 5},
              {description: 'Read DOET', isCompleted: true, ID: 6},
              {description: 'Provide NextTimer & PrevTimer Features', isCompleted: true, ID: 7},
              {description: 'Jog', isCompleted: true, ID: 8},
              {description: 'Create Linked Taskbar', isCompleted: false, ID: 1},
              {description: 'Eat Lunch', isCompleted: false, ID: 2},
              {description: 'Create Linked Tasklog', isCompleted: false, ID: 3}
            ],
            newTodoDescription: ''
        };
    }

    toggleComplete(index) {
        // back up array
        const todos = this.state.todos.slice();
        const todo = todos[index];
        // toggle between false and true
        todo.isCompleted = todo.isCompleted ? false : true;
        // request state update
        this.setState({ todos: todos });
      }
    
      deleteTodo(index) {
        const updatedTodo = this.state.todos.slice(0);
        updatedTodo.splice(index,1);
        this.setState({ todos: updatedTodo });
      }
    
      handleChange(e) {
        this.setState({ newTodoDescription: e.target.value });
      }
    
      handleSubmit(e) {
        // prevent default page reload
        e.preventDefault();
        // don't allow users to submit blank items
        if (!this.state.newTodoDescription) { 
          return; 
        }
        // build newTodo object
        const newTodo = { 
          description: this.state.newTodoDescription, 
          isCompleted: false,
          ID: this.props.i+1
        };
        // set state to previous + new && clear newTodoDescription
        this.setState({ 
          todos: [...this.state.todos, newTodo], 
          newTodoDescription: '' 
        });
      }
    
      render() {
        return (
          <div className="container-fluid">
            <ul className = "list-group">
              {
                this.state.todos.map( 
                  (todo, index) => 
                  <TasklogDisplay 
                    key={ index }
                    description={ todo.description } 
                    isCompleted={ todo.isCompleted }
                    ID={ todo.ID }
                    i={ this.props.i }
                    routines = { this.props.routines }
                    toggleComplete={ () => this.toggleComplete(index) }
                    delete={ () => this.deleteTodo(index) } />
                )
              }
            </ul>
            <form onSubmit={ (e) => this.handleSubmit(e) }>
               <input 
                  type="text" 
                  value={ this.state.newTodoDescription } 
                  onChange={ (e) => this.handleChange(e) }/>
               <input type="submit" />
            </form>
          </div>
        );
      }
    }
    
export default Tasklog;