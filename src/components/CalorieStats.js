import React, { Component } from 'react';
import { connect } from 'react-redux';

class CalorieStats extends Component {
  calories() {
    let calories = 0;
    this.props.smoothies.forEach(smoothie => (calories += smoothie.calories));
    return calories;
  }

  protein() {
    let protein = 0;
    this.props.smoothies.forEach(smoothie => (protein += smoothie.protein));
    return protein;
  }

  carbs() {
    let carbs = 0;
    this.props.smoothies.forEach(smoothie => (carbs += smoothie.carbs));
    return carbs;
  }

  render() {
    return (
      <div>
        <h4>Smoothie Stats</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <b>Overall Calories:</b> {this.calories()}
          </li>
          <li className='list-group-item'>
            <b>Overall Protein:</b> {this.protein()}
          </li>
          <li className='list-group-item'>
            <b>Overall Carbs:</b> {this.carbs()}
          </li>
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
  null
)(CalorieStats);
