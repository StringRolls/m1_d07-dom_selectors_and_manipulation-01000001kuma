![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# DOM Selectors and Manipulation
# Module 1 - Day 7

## Contents
> DOM | Selectors
> DOM | Manipulation

[01_class-dom_selectors](./01_class-dom_selectors)

[02_class-dom_manipulation](./02_class-dom_manipulation)


 ## DOM selectors
 
 - DOM selectors allow you to reach objects in the HTML document from the script:
 
    | Name          | Argument     | Return      | Scope |
    |---------------|--------------|-------------|------------- |
    | `.querySelector()` | CSS selector | Node | First object (node) matching the selector |
    | `.querySelectorAll()` | CSS Selector | NodeList | Array of objects (nodes) matching the selector |
    |`.querySelectorAll()` | CSS Selector | NodeList | Array of objects (nodes) matching the selector |
    

- Main properties of HTML objects (nodes):
  - `.innerText`
  - `.innerHTML`
  - `.style`
  - `.id`
  - `.className`
  - `.value` for the value of form inputs

 ## DOM manipulation
 
 - DOM manipulation allows to make aesthetic changes, content changes or to associate events to document objects by means of:
   - `.removeAttribute()`
   - `.setAttribute()`
   - `.createElement()`
   - `.createTextNode()` `.createTextNode()` `.appendChild()`
   - `.appendChild()`
   - `.insertBefore()`
   - `.removeChild()` `.removeChild()`

- Classes can be modified through the `.classList` property and its `.add()` and `.remove()` methods.

 ## Main points: event object

- The `event` object ([MDN](https://developer.mozilla.org/en/docs/Web/API/Event)) can be captured in those functions that are invoked as a result of an event, being able to avoid, among other things, the sending of a form:

  ````javascript
  obj.onsubmit = e => e.preventDefault()
  ````
