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
