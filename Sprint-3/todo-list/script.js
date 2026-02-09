// These are the initial todos
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todoInput");
const todoForm = document.getElementById("todoForm");
const removeAllCompletedBtn = document.getElementById("remove-all-completed");

// Create one todo <li>
function createTodoElement(todo) {
  const li = document.createElement("li");

  li.innerText = todo.task;

  // Apply completed styling to LI (important for tests)
  if (todo.completed) {
    li.style.textDecoration = "line-through";
  }

  // Check icon
  const checkIcon = document.createElement("i");
  checkIcon.className = "fa fa-check";
  checkIcon.style.marginLeft = "10px";
  checkIcon.addEventListener("click", () => {
    todo.completed = !todo.completed;
    li.style.textDecoration = todo.completed ? "line-through" : "none";
  });

  // Trash icon
  const trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash";
  trashIcon.style.marginLeft = "10px";
  trashIcon.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkIcon);
  li.appendChild(trashIcon);
  todoList.appendChild(li);
}

// Populate initial list
function populateTodoList(todos) {
  todoList.innerHTML = "";
  todos.forEach(createTodoElement);
}

// Add new todo
function addNewTodo(event) {
  event.preventDefault();

  const taskText = todoInput.value.trim();
  if (!taskText) return;

  const newTodo = { task: taskText, completed: false };
  todos.push(newTodo);
  createTodoElement(newTodo);

  todoInput.value = "";
}

// Remove all completed todos
function deleteAllCompletedTodos() {
  const items = Array.from(todoList.children);

  items.forEach((li) => {
    if (li.style.textDecoration === "line-through") {
      li.remove();
    }
  });
}

// Event listeners
todoForm.addEventListener("submit", addNewTodo);
removeAllCompletedBtn.addEventListener("click", deleteAllCompletedTodos);

// Initial render
populateTodoList(todos); 