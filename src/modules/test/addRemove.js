function add(array, input) {
  if (input !== '') {
    array.push({
      description: input,
      completed: false,
      index: array.length,
    });
  }
  return array;
}

function removeTask(array, index) {
  array.splice(index, 1);
  return array;
}
function changeCheck(array, id, status) {
  array[id].completed = status;
  return array;
}
function clearChecked(array) {
  return array.filter((task) => task.completed !== true);
}

module.exports = {
  add, removeTask, changeCheck, clearChecked,
};
