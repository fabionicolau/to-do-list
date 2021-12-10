const button = document.getElementById('criar-tarefa');
const OrderedList = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
function createTask() {
  const listChild = document.createElement('li');
  listChild.innerText = input.value;
  listChild.classList.add('list');
  OrderedList.appendChild(listChild);
  input.value = '';
}
button.addEventListener('click', createTask);

function listSelected(event) {
  const list = document.getElementsByClassName('list');
  for (let i = 0; i < list.length; i += 1) {
    if (event.target.classList.contains('list')) {
      list[i].classList.remove('selected');
      event.target.classList.add('selected');
    }
  }
}
document.addEventListener('click', listSelected);

function completedList(event) {
  if (event.target.classList.contains('list')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
}
document.addEventListener('dblclick', completedList);

// perguntar
function eraseAll() {
  const taskList = document.getElementById('lista-tarefas');
  while (taskList.hasChildNodes) {
    taskList.removeChild(taskList.firstChild);
  }
}
const eraseButton = document.getElementById('apaga-tudo');
eraseButton.addEventListener('click', eraseAll);

// perguntar
function eraseCompleted() {
  const taskList = document.getElementById('lista-tarefas');
  const list = document.getElementsByClassName('list');
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].classList.contains('completed')) {
      taskList.removeChild(list[i]);
    }
  }
}
const eraseCompletedButton = document.getElementById('remover-finalizados');
eraseCompletedButton.addEventListener('click', eraseCompleted);
