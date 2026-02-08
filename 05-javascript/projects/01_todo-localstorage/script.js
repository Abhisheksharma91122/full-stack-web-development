document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    renderTask(task);
  });

  const toast = document.getElementById("toast");

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

  addTaskButton.addEventListener("click", () => {
    let todoText = todoInput.value.trim();
    if (todoText === "") return;

    const newTask = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    // check for same task

    const task = tasks.some((task) => task.text === newTask.text);
    if (task) {
      showToast("Task already exists");
      return;
    }
    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    todoInput.value = ""; // reset input value
    console.log(tasks);
  });

  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTaskButton.click();
  });

  function renderTask(task) {
    // console.log(task);
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    todoList.appendChild(li);

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      //   console.log(e.target);
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => {
        return t.id !== task.id;
      });
      li.remove();
      saveTask();
    });
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
