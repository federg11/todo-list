const task_description = document.querySelector('#task');
const task_deadline = document.querySelector('#deadline');
const task_status = document.querySelector('#status');
const btn = document.querySelector('#btn');

const tasks_section = document.querySelector('#tasks');
const tasks = [];

btn.addEventListener('click', function () {


        const task = document.createElement('article');

        task.setAttribute('class', 'task')

        task.innerHTML = `
        <h3>${task_description.value}</h3>
        <p>${task_deadline.value}</p>
        <p>${task_status.value}</p>`;

        tasks_section.appendChild(task);

        task_description.value= "";
        task_deadline.value= "";
        task_status.value= "";
});