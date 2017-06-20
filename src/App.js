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
        <div >
          <img src={logo} className="App-logo" alt="logo" />
          <h2>David Oh. Currently experimenting with React</h2>
        </div>
     
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>Lucky Number Right Now: {randomNumber}</h3>
        <h3> <a href = "https://ohvious.com">Ohvious.com - Food, Tech, DIY Blog</a></h3>
        <h3><a href = "https://www.linkedin.com/in/davidoh/">Linkedin</a> | <a href = "https://github.com/davidyoh">GitHub</a> | <a href = "https://facebook.com/davidyoh">Facebook</a> | <a href = "https://instagram.com/davidyoh">Instagram</a></h3>
      </div>
    );
  }
}





export default Clock;
