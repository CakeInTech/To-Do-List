const task = [
  {
    description: 'Awesome books with ES6',
    completed: 'True',
    index: 1,
  },
  {
    description: 'To Do List: list structure',
    completed: 'false',
    index: 2,
  },
];

export default class taskUI {
    static showtask = () => {
      const lists = task;
      const li = document.querySelector('.lists');
      // eslint-disable-next-line no-unused-vars
      lists.forEach((list) => {
        li.insertAdjacentHTML(
          'beforeend',
          `<div class="task-list">
          <input class="input-check" type="checkbox" /><input type = "text" class = "edit-list" value = "I will make flips">
          <i class="fa fa-ellipsis-v"></i>

        </div>`,
        );
      });
    }
}