import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFruitById } from '../actions';

class SmoothieList extends Component {
  render() {
    return (
      <div>
        <h4>Your Smoothie Mix</h4>
        <ul className='list-group'>
          {this.props.smoothies.map(smoothie => (
            <li key={smoothie.id} className='list-group-item'>
              <div className='list-item'>{smoothie.name}</div>
              <div
                className='list-item right-button'
                onClick={() => this.props.removeFruitById(smoothie.id)}
              >
                x
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    smoothies: state.smoothies
  };
}

export default connect(
  mapStateToProps,
  { removeFruitById }
)(SmoothieList);
