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

    if (todo.completed) {
      span.style.textDecoration = "line-through";
    }

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa fa-check"></i>';
    completeBtn.className = "btn btn-success btn-sm";

    completeBtn.addEventListener("click", () => {
      span.style.textDecoration =
        span.style.textDecoration === "line-through"
          ? "none"
          : "line-through";
    });