const bookshelf = document.querySelector(".bookshelf");
const addnewbk = document.querySelector(".addnewbk");
const dialogbox = document.querySelector("#dialogbox");
const cancelbtn = document.querySelector("#cancel");
const confirmbkbtn = document.querySelector("#confirmbk");
const form = document.querySelector("#bookform");

const myLibrary = [];

function Book (title, author, pages, readstatus) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readstatus = readstatus;
}

/*Book.prototype.changeReadStatus = function () {
  if (this.readstatus === "Read") {
    this.readstatus = "Not read yet";
  } else {
    this.readstatus = "Read";
  }
};*/

function addBookToLibrary (title, author, pages, readstatus) {
  const newBook = new Book (title, author, pages, readstatus);
  myLibrary.push(newBook);
}

function displayBook (book) { //The book parameter refers to an existing book object in our array
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = book.title; //book.title is retrieved from the book object

  const author = document.createElement("p");
  author.textContent = `by ${book.author}`;

  const pages = document.createElement("p");
  pages.textContent = `${book.pages} pages`;

  const readstatus = document.createElement("p");
  readstatus.textContent = book.readstatus ? "Read" : "Not read yet";

  const removeBkButton = document.createElement("button");
  removeBkButton.classList.add("removeBk");
  removeBkButton.textContent = "Remove Book";

  /*const readButton = document.createElement("button");
  readButton.classList.add("readButton");
  readButton.textContent = "Change read status";
  readButton.addEventListener("click", () => {
    book.changeReadStatus;
    read.textContent = book.readstatus;
  })*/

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(readstatus);
  card.appendChild(removeBkButton);
  //card.appendChild(readButton);

  bookshelf.appendChild(card);
}

//addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
//addBookToLibrary("1984", "George Orwell", 328, true);

//myLibrary.forEach(displayBook);

addnewbk.addEventListener("click", () => {
  dialogbox.showModal();
})

//Optional - already catered for with formmethod="dialog"
cancelbtn.addEventListener("click", () => {
  dialogbox.close();
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formdata = new FormData(form); //retrieves data via name attributes on form elements
  const title = formdata.get("title");
  const author = formdata.get("author");
  const pages = formdata.get("pages");
  const readstatus = formdata.get("readstatus");

  addBookToLibrary(title, author, pages, readstatus);

  displayBook(myLibrary[myLibrary.length-1]); //only displaying last book in the array

  form.reset();

  dialogbox.close();
})












