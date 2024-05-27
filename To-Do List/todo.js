// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task');
    const task = taskInput.value;

    if (task) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task;
        li.appendChild(taskText);

        // Add a button to mark task as complete
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = function() {
            li.classList.toggle('complete');
        };

        // Add a button to delete the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Add a button to edit the task
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            editTask(li, taskText, editButton);
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to edit a task
function editTask(taskElement, taskText, editButton) {
    const currentText = taskText.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.onclick = function() {
        const newText = input.value;
        taskText.textContent = newText;
        taskElement.removeChild(input);
        taskElement.removeChild(saveButton);
        taskElement.insertBefore(taskText, taskElement.firstChild); // Re-insert the updated task text
        taskElement.appendChild(editButton); // Re-append the Edit button
    };

    taskElement.insertBefore(input, taskText);
    taskElement.insertBefore(saveButton, taskText.nextSibling);
    taskElement.removeChild(taskText);
    taskElement.removeChild(editButton); // Remove the original Edit button
}

document.getElementById('task').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
