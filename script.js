let submit = document.querySelector(".submit");
let background = document.querySelector('.background');
let bookForm = document.querySelector("#book-form");
let addBook = document.querySelector("#add-button");
let cancelBtn = document.querySelector(".cancel");
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let bookRead = document.querySelector("#read");
let readLabel = document.querySelector("#read-label");
let notReadLabel = document.querySelector("#not-read-label")
let bookNotRead = document.querySelector("#not-read");


let myLibrary = [];

window.addEventListener("load", function(){
  bookForm.classList.remove("book-details")
})

addBook.addEventListener("click", function(){
  bookForm.classList.add("book-details");
  background.style.filter = 'blur(3px)';

});


cancelBtn.addEventListener("click", function() {
  bookForm.classList.remove("book-details"); 
  background.style.filter = 'blur(0px)';
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
});

function books(title, author, pages, readStatus){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus

};

submit.addEventListener("click", function(e){
  e.preventDefault();
});

submit.addEventListener("click", function(){
  let title = bookTitle.value;
  let author = bookAuthor.value;
  let pages = bookPages.value;
  let readStatus = bookRead.checked ? readLabel.textContent : notReadLabel.textContent;
  if (title === '' || author === '' || pages === '') {
    alert('Please fill in all fields');
    myLibrary = [];
  } else {
  const newBook = new books(title, author, pages, readStatus);
  myLibrary.unshift(newBook);
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookForm.classList.remove("book-details"); 
  background.style.filter = 'blur(0px)';
  }
  
});

submit.addEventListener("click", addBookToLibrary);
removeButton.addEventListener("click", removeBook);


function addBookToLibrary() {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
      bookCard.innerHTML = `
      <p>Title: ${myLibrary[0].title}</p>
      <p>Author: ${myLibrary[0].author}</p>
      <p>Pages: ${myLibrary[0].pages}</p>
      <p>Status: ${myLibrary[0].readStatus}</p>
      `
      background.appendChild(bookCard);
      const removeButton = document.createElement("button");
      removeButton.classList.add("remove-button");
      removeButton.textContent = "Remove";
      bookCard.appendChild(removeButton);
      removeButton.addEventListener("click", removeBook);
};

function removeBook(event){
  const thisBookCard = event.target.parentElement; 
  thisBookCard.remove();


};
