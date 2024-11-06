let submit = document.querySelector(".submit");
let background = document.querySelector('.background');
let bookDetails = document.querySelector("#book-details");
let addBook = document.querySelector("#add-button");
let cancelBtn = document.querySelector(".cancel");
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let bookRead = document.querySelector("#read");
let readLabel = document.querySelector("#read-label");
let notReadLabel = document.querySelector("#not-read-label")
let bookNotRead = document.querySelector("#not-read")

const myLibrary = [];

window.addEventListener("load", function(){
  bookDetails.classList.remove("book-details")
})

addBook.addEventListener("click", function(){
  bookDetails.classList.add("book-details");
  background.style.filter = 'blur(3px)';

});


cancelBtn.addEventListener("click", function() {
  bookDetails.classList.remove("book-details"); 
  background.style.filter = 'blur(0px)';
});

function book(title, author, pages, readStatus){
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
  let readStatus = bookRead.checked ? readLabel : notReadLabel;
  if (title === '' || author === '' || pages === '') {
    alert('Please fill in all fields');
  } else {
  const newBook = new book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookDetails.classList.remove("book-details"); 
  background.style.filter = 'blur(0px)';
  }
  
});
console.log(myLibrary);


function addBookToLibrary() {
  // do stuff here
}

const biology = new book('mega', 'mega1', 300, 'Have read');
console.log(biology);
