import React, { Component } from 'react';
import request from 'request-promise'
import TasklogDisplay from '../TasklogDisplay/components/TasklogDisplay.jsx';

class Tasklog extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodoDescription: ''
        };
        this.toggleComplete = this.toggleComplete.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        let task = this.state.newTodoDescription
        let ID = this.props.i+1
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

        request('http://localhost:3000/save/'+task+'/'+ID).then(response => {
          console.log('saved');
        })
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