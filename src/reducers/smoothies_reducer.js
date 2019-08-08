import { ADD_FRUIT, REMOVE_FRUIT } from '../actions';
import { createFruit } from './helpers';

function smoothies(state = [], action) {
  switch (action.type) {
    case ADD_FRUIT:
      let smoothies = [...state, createFruit(action.id)];
      return smoothies;
    case REMOVE_FRUIT:
      smoothies = state.filter(item => item.id !== action.id);
      return smoothies;
    default:
      return state;
  }
}

export default smoothies;
