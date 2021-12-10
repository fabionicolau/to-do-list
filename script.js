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
