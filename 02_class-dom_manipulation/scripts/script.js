console.log("JS Loaded in the client");

const userInput = document.getElementById("to-do-item");
const todoMainList = document.getElementById("items-list");

userInput.addEventListener("change", (event) => {
  // 1. Create the element
  const newTodoElement = document.createElement("li");

  // 2. fill out the porperties and the text
  newTodoElement.textContent = event.target.value;
  newTodoElement.classList.add("todoitem");

  // 3. make it appear in the DOM by choosing a parent and inserting it into it
  todoMainList.appendChild(newTodoElement); // .insertBefore()
  event.target.value = "";
});

function handleClearAll(event) {
  // A trick in HTML is you can have the first and last child from a parent
  while (todoMainList.firstChild)
    todoMainList.removeChild(todoMainList.lastChild);
}

const clearButton = document.getElementById("all-done");

clearButton.addEventListener("click", handleClearAll);