function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task description cannot be empty.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `<span>${taskText}</span>
                         <input type="checkbox" onclick="toggleCompleted(this)">
                         <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(taskItem);

    taskInput.value = "";
}

function toggleCompleted(checkbox) {
    const taskText = checkbox.previousElementSibling;
    if (checkbox.checked) {
        taskText.classList.add("completed");
    } else {
        taskText.classList.remove("completed");
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
