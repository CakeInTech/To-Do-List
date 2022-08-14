import Sortable from 'sortablejs';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import * as cleartsk from './modules/task.js';

const listContainer = document.querySelector('.lists');
Sortable.create(listContainer);
document.querySelector('.lists').addEventListener('click', () => {});

cleartsk();
