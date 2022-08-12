import { clear, clearAllTask } from './clearcm.js';

const addBtn = document.querySelector('.submit');
const Input = document.querySelector('.input');
const Container = document.querySelector('.lists');
const clearAll = document.querySelector('.clearall');
const task = JSON.parse(localStorage.getItem('task')) || [];

const domMN = () => {
  const task = JSON.parse(localStorage.getItem('task')) || [];
  Container.innerHTML = '';
  task.forEach((taskl) => {
    const oneContainer = document.querySelector('.lists');
    const taskLister = document.createElement('div');
    const flag = taskl.completed ? 'checked' : '';
    taskLister.classList.add('list-info');
    taskLister.innerHTML = ` <div class="check">
              <input type="checkbox" class="input-check" data-clear="${taskl.index}" ${flag}>
              <input type="text" class="edit-list" data-desc="${taskl.index}" value="${taskl.description}"/>
              <i class="fa-solid fa-trash-can"id ="${taskl.index}"></i>
              </div>
              </div>
                `;
    oneContainer.appendChild(taskLister);
  });
};
domMN();

addBtn.addEventListener('click', (e) => {
  const input = Input.value;
  e.preventDefault();
  Input.value = '';
  if (!input) return;
  const obj = {
    description: input,
    completed: false,
    index: task.length,
  };
  task.push(obj);
  localStorage.setItem('task', JSON.stringify(task));
  domMN();
});

const removeTask = (index) => {
  const newArr = task.filter((element) => element.index !== index);
  task.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  task.push(...newArr);
  localStorage.setItem('task', JSON.stringify(task));
  domMN();
};

Container.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    removeTask(index);
  }
});

const update = (e) => {
  const clicked = e.target.closest('.todo');

  if (!clicked) return;
  clicked.addEventListener('keyup', () => {
    const task = JSON.parse(localStorage.getItem('task')) || [];
    const targetData = parseInt(clicked.getAttribute('data-desc'), 10);

    const update = task.find((element) => element.index === targetData);

    update.description = clicked.value.trim();
    localStorage.setItem('task', JSON.stringify(task));
  });
};

Container.addEventListener('click', update);

Container.addEventListener('click', clear);

clearAll.addEventListener('click', () => {
  clearAllTask();
  domMN();
});