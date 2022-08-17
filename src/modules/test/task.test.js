const taskStore = require('./addRemove.js');

let array = [];
describe('add and remove', () => {
  // Add
  test('add test', () => {
    array = taskStore.add(array, 'test1');
    expect(array).toHaveLength(1);
    array = taskStore.add(array, 'test2');
    expect(array).toHaveLength(2);
  });
});