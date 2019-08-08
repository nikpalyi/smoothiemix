import { combineReducers } from 'redux';

import fruits from './fruits_reducer';
import smoothies from './smoothies_reducer';

const rootReducer = combineReducers({
  fruits,
  smoothies
});

export default rootReducer;
