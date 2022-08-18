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

  // remove
  test('remove test', () => {
    array = taskStore.removeTask(array, 1);
    expect(array).toHaveLength(1);
  });

  test('checkBox test', () => {
    array = taskStore.changeCheck(array, 0, true);
    expect(array[0].completed).toBe(true);
  });

  test('clear All checked', () => {
    array = taskStore.add(array, 'test2');
    array = taskStore.add(array, 'test3');
    array = taskStore.changeCheck(array, 2, true);
    array = taskStore.clearChecked(array);
    expect(array).toHaveLength(1);
    expect(array[0].completed).toBe(false);
    expect(array[0].description).toBe('test2');
  });
});
