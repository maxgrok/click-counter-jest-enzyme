import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleError(){
    return (<div>Error: Cannot go beyond 0. Please increment. </div>)
  }

  handleClick(e){
    if (this.state.counter === 0){
      let div = document.createElement('div')
      div.id = "error"
      let root = document.getElementById("#root")
      document.body.appendChild(div);
      return this.setState({counter: 0})
    } else if (this.state.counter > 0){
      return this.setState({counter: this.state.counter - 1})
    } 
  }
  render() {
    return (
      <div data-test="component-app" id="container">
          <h1 data-test="counter-display">The counter is currently {this.state.counter} </h1>
          <div data-test="error">Error: </div>
          <button data-test="increment-button" onClick={()=> this.setState({counter: this.state.counter +1 })}>Increment counter</button>
          <button data-test="decrement-button" onClick={this.handleClick.bind(this)}>Decrement</button>
      </div>
    );
  }
}

export default App;
