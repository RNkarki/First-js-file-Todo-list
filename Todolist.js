const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("#task-list");
 
form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
 
function addTask(e) {
  e.preventDefault();
  if (taskInput.value === "") return;
 
  const task = document.createElement("li");
  task.className = "task";
  task.innerText = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = "";
}
 
function removeTask(e) {
  if (e.target.classList.contains("task")) {
    e.target.remove();
  }
}