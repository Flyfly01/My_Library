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
  this.readstatus = readstatus; //boolean - will be true or false
}

Book.prototype.changeReadStatus = function () {
  this.readstatus = !this.readstatus; //toggling the boolean
};

function addBookToLibrary (title, author, pages, readstatus) {
  const newBook = new Book (title, author, pages, readstatus);
  myLibrary.push(newBook);
}

function displayBook (book) { //The book parameter refers to an existing book object in our array
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = book.id; //Linking cardID with bookID

  const title = document.createElement("h3");
  title.textContent = book.title; //book.title is retrieved from the book object

  const author = document.createElement("p");
  author.textContent = `by ${book.author}`;

  const pages = document.createElement("p");
  pages.textContent = `${book.pages} pages`;

  const readstatus = document.createElement("div");
  readstatus.textContent = book.readstatus ? "Read" : "Not read yet";
  if (book.readstatus) {
    readstatus.classList.add("read");
  } else {
    readstatus.classList.add("notread");
  };

  const removeBkButton = document.createElement("button");
  removeBkButton.classList.add("removeBk");
  removeBkButton.textContent = "Remove Book";
  removeBkButton.addEventListener("click", () => {
    const cardID = card.dataset.id; //Finding the card using the bookID
    const bookindex = myLibrary.findIndex(book => book.id === cardID) //Locating the book in the array. Once the answer is not -1, you found the book
    if (bookindex !== -1) {
      myLibrary.splice(bookindex, 1); //Remove the book from the array
    }
    card.remove();
  });

  const readButton = document.createElement("button");
  readButton.classList.add("readButton");
  readButton.textContent = "Change read status";
  readButton.addEventListener("click", () => {
    book.changeReadStatus();
    //this "if" statement looks at the NEW INVERTED value of boolean
    if (book.readstatus) {
      readstatus.textContent = "Read"; 
      readstatus.classList.remove("notread");
      readstatus.classList.add("read");
    } else {
      readstatus.textContent = "Not read yet";
      readstatus.classList.remove("read");
      readstatus.classList.add("notread");
    }
    //readstatus.textContent = book.readstatus ? "Read" : "Not read yet";
  })

  const btncontainer = document.createElement("div");
  btncontainer.classList.add("btndiv");
  btncontainer.appendChild(removeBkButton);
  btncontainer.appendChild(readButton);

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(readstatus);
  card.appendChild(btncontainer);
  /*card.appendChild(removeBkButton);
  card.appendChild(readButton);*/

  bookshelf.appendChild(card);
}

addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K Rowling", 309, true);
addBookToLibrary("Death Note Vol I", "Takeshi Obata", 200, true);
addBookToLibrary("The Da Vinci Code", "Dan Brown", 480, false);
addBookToLibrary("The Hunger Games", "Suzanne Collins", 384, true);
myLibrary.forEach(displayBook);

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
  const readstatus = formdata.get("readstatus") === "true";

  addBookToLibrary(title, author, pages, readstatus);

  displayBook(myLibrary[myLibrary.length-1]); //only displaying last book in the array

  form.reset();

  dialogbox.close();
})












