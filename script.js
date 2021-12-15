const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const downButton = document.getElementById('mover-baixo');
const upButton = document.getElementById('mover-cima');

window.onload = () => {
  taskList.innerHTML = JSON.parse(localStorage.getItem('lista'));
};

function createTask() {
  const listChild = document.createElement('li');
  listChild.innerText = input.value;
  listChild.classList.add('list');
  taskList.appendChild(listChild);
  input.value = '';
}
button.addEventListener('click', createTask);

function listSelected(event) {
  const list = document.getElementsByClassName('list');
  for (let i = 0; i < list.length; i += 1) {
    if (event.target.classList.contains('list')) {
      list[i].classList.remove('selected');
      event.target.classList.add('selected');
    } else if (event.target !== upButton && event.target !== downButton) {
      list[i].classList.remove('selected');
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

// referência: https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/#:~:text=Child%20nodes%20can%20be%20removed,which%20produces%20the%20same%20output.
function eraseAll() {
  while (taskList.lastElementChild) {
    taskList.removeChild(taskList.lastElementChild);
  }
}
const eraseButton = document.getElementById('apaga-tudo');
eraseButton.addEventListener('click', eraseAll);

//
function eraseCompleted() {
  const list = document.getElementsByClassName('completed');
  for (let i = 0; i < list.length; i += 1) {
    while (list[i] && list[i].classList && list[i].classList.contains('completed')) {
      taskList.removeChild(list[i]);
    }
  }
}
const eraseCompletedButton = document.getElementById('remover-finalizados');
eraseCompletedButton.addEventListener('click', eraseCompleted);

function eraseSelected() {
  const list = document.getElementsByClassName('selected');
  for (let i = 0; i < list.length; i += 1) {
    while (list[i] && list[i].classList && list[i].classList.contains('selected')) {
      taskList.removeChild(list[i]);
    }
  }
}
const eraseSelectedButton = document.getElementById('remover-selecionado');
eraseSelectedButton.addEventListener('click', eraseSelected);

function saveTaskButton() {
  localStorage.setItem('lista', JSON.stringify(taskList.innerHTML));
}
const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', saveTaskButton);

// referência: https://www.ti-enxame.com/pt/javascript/mover-um-elemento-um-lugar-para-cima-ou-para-baixo-na-arvore-do-dom-com-javascript/822635469/
function moveUpSelected() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected.previousElementSibling) {
    selected.parentNode.insertBefore(selected, selected.previousElementSibling);
  }
}
upButton.addEventListener('click', moveUpSelected);

// referência: https://www.ti-enxame.com/pt/javascript/mover-um-elemento-um-lugar-para-cima-ou-para-baixo-na-arvore-do-dom-com-javascript/822635469/
function moveDownSelected() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected.nextElementSibling) {
    selected.parentNode.insertBefore(selected.nextElementSibling, selected);
  }
}
downButton.addEventListener('click', moveDownSelected);
