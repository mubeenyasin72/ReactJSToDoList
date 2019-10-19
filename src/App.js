import React, { Component } from 'react';
import './App.css';
import Todolist from './components/todolist';
class App extends Component {
  state = {  };
  
  render() {
    return (
      <div>
        <Todolist/>
      </div>
    );
  }
}

export default App;