import React, { Component } from 'react';
import FruitList from './FruitList';
import SmoothieList from './SmoothieList';
import CalorieStats from './CalorieStats';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h2>Smoothie Mix</h2>
        <div className='col-md-4'>
          <FruitList />
        </div>
        <div className='col-md-4'>
          <SmoothieList />
        </div>
        <div className='col-md-4'>
          <CalorieStats />
        </div>
      </div>
    );
  }
}

export default App;
