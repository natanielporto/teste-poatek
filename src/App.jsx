import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import UpperLayout from './components/UpperLayout';
import TasksList from './components/TasksList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  getLocalTodos = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

  setLocalTodos = todos => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  populate = () => {
    return this.setState({ todos: this.getLocalTodos() });
  };

  setTodos = todo => {
    const localTodos = this.getLocalTodos();

    if (todo) {
      localTodos.push(todo);
      this.setLocalTodos(localTodos);
      this.populate();
    }
  };

  create = todo => {
    const { todos } = this.state;

    this.setTodos(todo);

    this.setState({ todos });

    this.populate();
  };

  componentDidMount = () => {
    this.localTodos = this.getLocalTodos();
    if (this.localTodos.length) {
      this.setState({ todos: this.localTodos });
    }
    this.populate();
  };

  alterTodo = (id, newValue) => {
    if (newValue) {
      const alter = this.getLocalTodos();

      const filtered = alter.map(e => (e.id === id ? { ...e, value: newValue } : e));
      this.setLocalTodos(filtered);
    }
  };

  remove = id => {
    const todos = this.getLocalTodos();

    const filtered = todos.filter(e => {
      return e.id !== id;
    });

    this.setLocalTodos(filtered);
    this.populate();
  };

  toggleDone = id => {
    const todos = this.getLocalTodos();

    const filtered = todos.map(e => (e.id === id ? { ...e, done: !e.done } : e));

    this.setLocalTodos(filtered);
    this.populate();
  };

  toggleEdit = id => {
    const todos = this.getLocalTodos();

    const filtered = todos.map(e => (e.id === id ? { ...e, edit: !e.edit } : e));

    this.setLocalTodos(filtered);
    this.populate();
  };

  clear = () => {
    localStorage.clear();
    this.populate();
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <UpperLayout create={this.create} />
        <TasksList
          todos={todos}
          remove={this.remove}
          toggleDone={this.toggleDone}
          toggleEdit={this.toggleEdit}
          alterTodo={this.alterTodo}
          getLocalItem={this.getLocalItem}
          setLocalItem={this.setLocalItem}
          populate={this.populate}
        />
        <footer className="col-md-6 offset-md-3 p-2">
          <Button color="primary" size="lg" block onClick={this.clear}>
            Clear list
          </Button>
        </footer>
      </div>
    );
  }
}

export default App;
