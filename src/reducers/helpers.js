import fruits_json from '../data/fruits.json';

export function createFruit(id) {
  let fruit = fruits_json.find(c => c.id === id);
  return fruit;
}
