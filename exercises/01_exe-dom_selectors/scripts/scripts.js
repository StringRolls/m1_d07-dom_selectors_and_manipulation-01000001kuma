// 1: Get the node with the  main title

const mainTitle = document.querySelector('h1');
console.log(mainTitle);

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

console.log(mainTitle.innerHTML);

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

const fruitItems = document.getElementsByClassName('fruit-item');
console.log(fruitItems);

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

const veggies = document.querySelectorAll('.veggie-item');
veggies.forEach(oneVeggie => console.log(oneVeggie.innerHTML));

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

const subTitleVeggie = document.querySelectorAll('h2')[1].innerHTML;
console.log(subTitleVeggie);

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

const subTitleFruit = document.querySelector('h2');

subTitleFruit.id = 'fruit-title';

console.log(subTitleFruit.id);

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

[...fruitItems].forEach((oneFruit, i) => {
  if (i % 2 === 0) {
    oneFruit.classList.add('best-fruit');
    console.log(oneFruit);
  }
});
// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const veggieList = document.querySelector('.veggies');

veggieList.classList.remove('veggies');
console.log(veggieList);

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

veggies.forEach(veg => {
  veg.classList.add('veggie-love');
  console.log(veg);
});

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

veggies.forEach(veg => {
  if (veg.innerHTML === 'Spinach') {
    veg.classList.remove('veggie-item');
  }
  console.log(veg);
});

// => ... <li class="veggie-love">Spinach</li>