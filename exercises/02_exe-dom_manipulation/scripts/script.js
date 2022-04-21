console.log('INDEX.JS connected');

// ****************************** part 1 *********************************

document.querySelector('#new-task-form').addEventListener('submit', e => {
  e.preventDefault();
  const taskInput = document.querySelector('#task-input');
  const taskContent = taskInput.value;
  const ownerInput = document.querySelector('#owner-input');
  const ownerContent = ownerInput.value;

  const ulParent = document.querySelector('#tasks-list');
  const newLi = document.createElement('li');
  newLi.innerText = `${taskContent} by  ${ownerContent}`;

  ulParent.appendChild(newLi);

  taskInput.value = '';
  ownerInput.value = '';
});

// ****************************** part 2 *********************************

const updateGifBtn = document.getElementById('update-button');

updateGifBtn.addEventListener('click', () => {
  const gifTag = document.querySelector('iframe');
  const currentGif = gifTag.className;

  if (currentGif === 'three-minions') {
    gifTag.setAttribute('src', 'https://giphy.com/embed/1MTLxzwvOnvmE');
    gifTag.className = 'two-minions';
  } else {
    gifTag.setAttribute('src', 'https://giphy.com/embed/MOWPkhRAUbR7i');
    gifTag.className = 'three-minions';
  }
});