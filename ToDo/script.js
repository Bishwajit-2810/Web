document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input")
    const addTaskBtn = document.getElementById("add-task-btn")
    const todoList = document.getElementById("todo-list")


    let tasks = JSON.parse(localStorage.getItem('tasks')) || []

    tasks.forEach(task => {
        renderTask(task)
    });

    addTaskBtn.addEventListener("click", () => {
        let taskTxt = todoInput.value.trim()
        if (taskTxt === "") {
            return;
        } else {
            const newTask = {
                id: Date.now(),
                text: taskTxt,
                completed: false
            }
            tasks.push(newTask)
            renderTask(newTask)
            saveTask()
            todoInput.value = ""
        }

    })

    function renderTask(task) {
        const li = document.createElement('li')
        li.setAttribute('data-id', task.id)
        if (task.completed) li.classList.add("completed")
        li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
        `
        li.addEventListener('click', (e) => {
            if (e.target.tagName === "BUTTON") { return }
            task.completed = !task.completed
            li.classList.toggle("completed")
            saveTask()
        })

        li.querySelector('button').addEventListener("click", (e) => {
            e.stopPropagation()
            tasks = tasks.filter(t => t.id !== task.id)
            li.remove()
            saveTask()
        })

        todoList.appendChild(li)
    }

    function saveTask() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})