function shoppingList(arrayOfItems) {
  // Write your code here...
  let content = document.querySelector('#content');
  let ul = document.createElement('ul');

  arrayOfItems.forEach(item => {
    let shoppingItems = document.createElement('li');
    shoppingItems.innerText = item;
    ul.appendChild(shoppingItems);
  });

  content.append(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
