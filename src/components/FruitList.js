import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFruitById } from '../actions';

class FruitList extends Component {
  render() {
    console.log('this.props', this.props);

    return (
      <div>
        <h4>Fruits</h4>
        <ul className='list-group'>
          {this.props.fruits.map(fruit => {
            return (
              <li key={fruit.id} className='list-group-item'>
                <div className='list-item'>{fruit.name}</div>
                <div
                  className='list-item right-button'
                  onClick={() => this.props.addFruitById(fruit.id)}
                >
                  +
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fruits: state.fruits
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addFruitById }, dispatch);
// }

export default connect(
  mapStateToProps,
  { addFruitById }
)(FruitList);
