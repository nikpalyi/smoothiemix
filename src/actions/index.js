export const ADD_FRUIT = 'ADD_FRUIT';
export const REMOVE_FRUIT = 'REMOVE_FRUIT';

export function addFruitById(id) {
  const action = {
    type: ADD_FRUIT,
    id
  };
  return action;
}

export function removeFruitById(id) {
  const action = {
    type: REMOVE_FRUIT,
    id
  };
  return action;
}
