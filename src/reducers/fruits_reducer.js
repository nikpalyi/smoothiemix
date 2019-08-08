import fruits_json from '../data/fruits.json';
import { ADD_FRUIT, REMOVE_FRUIT } from '../actions';
import { createFruit } from './helpers';

function fruits(state = fruits_json, action) {
  switch (action.type) {
    case ADD_FRUIT:
      let fruits = state.filter(item => item.id !== action.id);
      return fruits;
    case REMOVE_FRUIT:
      fruits = [...state, createFruit(action.id)];
      return fruits;
    default:
      return state;
  }
}

export default fruits;
