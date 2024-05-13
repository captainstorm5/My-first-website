const taskInput = document.getElementById('task-input');

const addTaskBtn = document.getElementById('add-task-btn');

const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value;
    if (task !=='') {
        const taskListItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskText = document.createElement('span');
        taskText.textContent = task;
        
        taskListItem.appendChild(checkbox);

        taskListItem.appendChild(taskText);

        taskList.appendChild(taskListItem);
        taskInput.value = '';
    }
}

taskList.addEventListener('click', function(event)
{
    if (event.target.tagName=== 'LI') {
        const checkbox = event.target.querySelector('input');
        checkbox.checked = ! checkbox.checked;
    }
})

taskList.addEventListener('click', function(event)
{
    if (event.target.tagName=== 'LI') {
        const checkbox = event.target.querySelector('input');
        checkbox.checked = ! checkbox.checked;
        event.target.classList.toggle('completed');
        if (checkbox.checked)
        {
            if (confirm('Are you sure you want to delete this task?')) {
                event.target.remove(); // Remove the entire list item
            } else {
                checkbox.checked = false;
            }
        }
    }
});