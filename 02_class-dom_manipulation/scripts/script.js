console.log("JS Loaded in the client");

const userInput = document.getElementById("to-do-item");
const todoMainList = document.getElementById("items-list");

userInput.addEventListener("change", (event) => {
  // 1. Create the element
  const newTodoElement = document.createElement("li");

  // 2. fill out the porperties and the text
  newTodoElement.textContent = event.target.value;
  newTodoElement.classList.add("todoitem");

  // 3. make it appear in the DOM by chosing a parent and insertin it into it
  todoMainList.appendChild(newTodoElement); // .insertBefore()
});
