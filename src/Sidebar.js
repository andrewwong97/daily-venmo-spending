import React, { Component } from 'react';
import './App.css';
import './Sidebar.css';


export default class Sidebar extends Component {
  render() {
    return(
      <div className="sidebar">
        <nav>
          <div className="pic"></div>
          <ul>
            <li className="links">
              <a href="#"><i className="fa fa-home"></i>Home</a>
              <a href="#"><i className="fa fa-clock-o"></i>Sessions</a>
              <a href="#"><i className="fa fa-users"></i>Students</a>
              <a href="#"><i className="fa fa-calendar"></i>Calendar</a>
              <a href="#"><i className="fa fa-file-o"></i>Docs</a>
              <a href="#"><i className="fa fa-pie-chart"></i>Reports</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
