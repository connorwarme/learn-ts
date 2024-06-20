"use strict";
const list = document.querySelector('#list');
const input = document.querySelector('#new-task-input');
const form = document.querySelector('#new-task-form');
const tasks = [];
form === null || form === void 0 ? void 0 : form.addEventListener('click', (e) => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == '' || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const task = {
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
    list === null || list === void 0 ? void 0 : list.appendChild(li);
    tasks.push(task);
    input.value = '';
});
