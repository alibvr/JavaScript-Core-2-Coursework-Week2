function readingList(books) {
  // Write your code here...
  let content = document.getElementById("#content");
  let createUl = document.createElement("ul");
  let bookListTitle = document.createElement("h1");
  bookListTitle.innerText = "Book List";
  content.append(bookListTitle);

  books.forEach(book => {
    // create book's box elements
    let createP = document.createElement("p");
    let createImg = document.createElement("img");
    let createList = document.createElement("li");

    createP.innerText = `${book.title} - ${book.author}`;

    createImg.src = book.image;
    createImg.style.height = "80%";
    createList.append(createP, createImg);
    createList.className = "styleList";
    createList.style.backgroundColor = "green";
    createUl.appendChild(createList);

  });

  createUl.className = "flexUl";
  createUl.firstChild.style.backgroundColor = "red";
  content.append(createUl);

}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    image: 
    "https://images-na.ssl-images-amazon.com/images/I/4110aGOC28L._SX331_BO1,204,203,200_.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image:
    "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image: 
    "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
  }
];

readingList(books);