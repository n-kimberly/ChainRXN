import React, { Component } from 'react';
import TasklogDisplay from '../TasklogDisplay/components/TasklogDisplay';

class Tasklog extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
              {description: 'Sit', isCompleted: true},
              {description: 'Jump', isCompleted: false},
              {description: 'Rollover', isCompleted: false}
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
          isCompleted: false
        };
        // set state to previous + new && clear newTodoDescription
        this.setState({ 
          todos: [...this.state.todos, newTodo], 
          newTodoDescription: '' 
        });
      }
    
      render() {
        return (
          <div className="App">
            <ul>
              {
                this.state.todos.map( 
                  (todo, index) => 
                  <TasklogDisplay 
                    key={ index }
                    description={ todo.description } 
                    isCompleted={ todo.isCompleted }
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