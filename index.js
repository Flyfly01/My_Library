const bookshelf = document.querySelector(".bookshelf");
const addnewbk = document.querySelector(".addnewbk");
const dialogbox = document.querySelector("#dialogbox");
const cancelbtn = document.querySelector("#cancel");
const confirmbkbtn = document.querySelector("#confirmbk");
const form = document.querySelector("#bookform");

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

  const formdata = new FormData(form);
  const title = formdata.get("title");
  const author = formdata.get("author");
  const pages = formdata.get("pages");
  const readstatus = formdata.get("readstatus");

  addBookToLibrary(title, author, pages, readstatus);

  displayBook(myLibrary[myLibrary.length-1]);
})












