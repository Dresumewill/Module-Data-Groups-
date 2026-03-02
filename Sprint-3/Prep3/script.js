const button = document.getElementById("toggleBtn");
const textareas = document.querySelectorAll("textarea");

button.addEventListener("click", () => {
  const isReadOnly = button.textContent === "Read-only";

  textareas.forEach(textarea => {
    textarea.readOnly = isReadOnly;
  });

  button.textContent = isReadOnly ? "Modifiable" : "Read-only";
});
