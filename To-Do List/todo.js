// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task');
    const task = taskInput.value;

    if (task) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = task;

        // Add a button to mark task as complete
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = function() {
            li.style.textDecoration = 'line-through';
        };

        // Add a button to delete the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}
