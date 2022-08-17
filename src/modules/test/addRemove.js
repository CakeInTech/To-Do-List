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

module.exports = {
  add,
};
