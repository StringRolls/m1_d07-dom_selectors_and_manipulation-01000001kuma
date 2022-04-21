// This runs on the client's browser
console.log("Js loaded in the browser");

// Reading from the DOM
console.log(
  document.querySelector("div.first-div").innerHTML,
  "\n",
  document.querySelector("div.first-div + div").innerText
);

console.log(typeof document.getElementsByClassName("first-div"));
const myHtmlElements = Array.from(document.getElementsByClassName("first-div"));

myHtmlElements.forEach((el) => console.log("getElementsByClassName", el));

const myHtmlTags = Array.from(document.getElementsByTagName("div"));

myHtmlTags.forEach((el) => console.log("getElementsByTagName", el));

console.log("Test for strict equality", myHtmlElements[0] === myHtmlTags[0]);

const capButton = document.querySelector("button.upperbutton")

// EVENT LISTENERS
function handleMakeTitleUppercase(event){
    console.log("event", event);
    event.target.style.color = "red";
    event.target.innerText = "I have changed the title!";
    const titleH1 = document.querySelector("h1");
    titleH1.innerText = titleH1.innerText.toUpperCase();
    titleH1.style.color = "blue"
}

// one syntax to set hazndlers of events
capButton.onclick = handleMakeTitleUppercase;

// another syntax to set listeners of events
capButton.addEventListener("click", handleMakeTitleUppercase);

const userInput = document.querySelector("[name*='user-input']")
const userEcho = document.getElementById("echo");
userInput.onchange = (event)=>{
userEcho.innerText = event.target.value;
};