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

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    // Append elements
    li.append(span, completeBtn, deleteBtn);
    list.appendChild(li);
  });
}

// Initial todos
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// Add new todo
function addNewTodo(event) {
  event.preventDefault();

  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task === "") return;

  todos.push({ task, completed: false });
  populateTodoList(todos);

  // Reset input field
  input.value = "";
}