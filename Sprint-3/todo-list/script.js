function populateTodoList(todos) {
  const list = document.getElementById("todo-list");

  // Clear existing list (important for tests & re-rendering)
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "list-group-item";

    // Task text
    const span = document.createElement("span");
    span.textContent = todo.task;