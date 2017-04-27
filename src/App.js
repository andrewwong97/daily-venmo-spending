import React, { Component } from 'react';
import logo from './logo.svg';
import {Bar} from 'react-chartjs-2';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  componentDidMount() {
    this.getName();
  }

  getName() {
    this.setState({name: "Andrew W."});
  }

  render() {
    const data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 50, 0.2);
      return {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Spending Per Day (this week)',
            backgroundColor: 'rgba(66, 244, 92,0.1)',
            borderColor: 'rgba(66, 244, 92,.3)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(66, 244, 92,0.2)',
            hoverBorderColor: 'rgba(66, 244, 92,.6)',
            data: [6.5, 5.9, 8.0, 8.1, 5.6, 5.5, 4.0]
          }
        ]
      }
    }
    const options = {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      },
      maintainAspectRatio: false
    }
    return (
      <div className="App">
        <h1>Venmo Daily Spending Habits</h1>
        <h4>{this.state.name}</h4>
        <div className="graph-wrapper">
          <Bar options={options} data={data} height={450}/>
        </div>
      </div>
    );
  }
}

export default App;
