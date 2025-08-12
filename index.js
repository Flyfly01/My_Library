const bookshelf = document.querySelector(".bookshelf");

const myLibrary = [];

function Book (title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary (title, author, pages, read) {
  const newBook = new Book (title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBook (book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = `by ${book.author}`;

  const pages = document.createElement("p");
  pages.textContent = `${book.pages} pages`;

  const read = document.createElement("p");
  read.textContent = book.read ? "Read" : "Not read yet";

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);

  bookshelf.appendChild(card);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("1984", "George Orwell", 328, true);

myLibrary.forEach(displayBook);
