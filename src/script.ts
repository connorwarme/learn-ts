type Task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>('#list');
const input = document.querySelector<HTMLInputElement>('#new-task-input');
const form = document.querySelector<HTMLFormElement>('#new-task-form');
const tasks: Task[] = [];

form?.addEventListener('click', (e) => {
  e.preventDefault();

  if (input?.value == '' || input?.value == null) return;

  const task: Task = {
    id: Math.floor(Math.random() * 1000),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  const li = document.createElement('li');
  const label = document.createElement('label');
  label.textContent = task.title;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
  });
  li.appendChild(checkbox);
  li.appendChild(label);
  list?.appendChild(li);

  tasks.push(task);
  input.value = '';
});