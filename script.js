function createTaskButton() {
  const button = document.getElementById('criar-tarefa');
  const OrderedList = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  function createTask() {
    const listChild = document.createElement('li');
    listChild.innerText = input.value;
    OrderedList.appendChild(listChild);
    input.value = '';
  }
  button.addEventListener('click', createTask);
}
createTaskButton();

function listSelected(event) {
  const list = document.getElementsByTagName('li');
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      list[i].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}
document.addEventListener('click', listSelected);
