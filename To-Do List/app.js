let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const task = {
            text: taskText,
            date: new Date().toLocaleString(),
            completed: false
        };

        tasks.push(task);
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");

    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text} - ${task.date}</span>
            <span>
                <input type="checkbox" onclick="toggleTaskCompletion(${index})" ${task.completed ? 'checked' : ''}>
                <span class="delete" onclick="deleteTask(${index})">Delete</span>
            </span>
        `;

        if (task.completed) {
            completedTasksList.appendChild(listItem);
        } else {
            pendingTasksList.appendChild(listItem);
        }
    });
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Initial display
displayTasks();
