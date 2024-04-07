const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const importantUrgentList = document.getElementById('importantUrgentList');
const importantNotUrgentList = document.getElementById('importantNotUrgentList');
const notImportantUrgentList = document.getElementById('notImportantUrgentList');
const notImportantNotUrgentList = document.getElementById('notImportantNotUrgentList');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  if (taskText === '') return;
  const taskElement = createTaskElement(taskText);
  switch (priority) {
    case 'important-urgent':
      importantUrgentList.appendChild(taskElement);
      break;
    case 'important-not-urgent':
      importantNotUrgentList.appendChild(taskElement);
      break;
    case 'not-important-urgent':
      notImportantUrgentList.appendChild(taskElement);
      break;
    case 'not-important-not-urgent':
      notImportantNotUrgentList.appendChild(taskElement);
      break;
  }
  taskInput.value = '';
}

function createTaskElement(taskText) {
  const taskElement = document.createElement('li');
  taskElement.className = 'task';
  taskElement.innerText = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskElement.remove();
  });

  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.addEventListener('click', () => {
    const newTaskText = prompt('Enter the new task text:');
    if (newTaskText !== null && newTaskText.trim() !== '') {
      taskElement.innerText = newTaskText.trim();
    }
  });

  taskElement.appendChild(deleteButton);
  taskElement.appendChild(editButton);

  return taskElement;
}
