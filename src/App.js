import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomNumber = getRandomInt(0,100)


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {

    return (

    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>David's React Project</h2>
        </div>
     
   
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>Random Number: {randomNumber}</h3>
      </div>
    );
  }
}





export default Clock;
