let closeFormBtn = document.querySelector(".close-form");
let background = document.querySelector('.background');
let bookDetails = document.querySelector("#book-details");
let addBook = document.querySelector("#add-button");

window.addEventListener("load", function(){
  bookDetails.classList.remove("book-details")
})

addBook.addEventListener("click", function(){
  bookDetails.classList.add("book-details");
  background.style.filter = 'blur(3px)';

});


closeFormBtn.addEventListener("click", function() {
  bookDetails.classList.remove("book-details"); 
  background.style.filter = 'blur(0px)';
});
 
const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
