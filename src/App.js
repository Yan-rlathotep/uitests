import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { combinator } from 'postcss-selector-parser';


class App extends Component {
  render() {
    return (

      <div class="grid">
        <div class="menu-top">MENU</div>
        <div class="menu-bot">ACTIONS</div>
        <div class="main-display">DISPLAY</div>
        <div class="nested">
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
          <div class="box">box</div>
        </div>
      </div>

    );
  }
}

export default App;
