import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form'
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   App
      // </div>
      <TodoListTemplate form={<Form/>}>
        템플렛 완성 
      </TodoListTemplate>
    );
  }
}

export default App;
