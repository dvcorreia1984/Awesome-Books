const books = [
  {   Id:1,
      Title:"Lorem ipsum",
      Author:"Testeroo Testyy"},
   {  Id:2,
      Title:"Second Books",
      Author:"Testeroo Testyy"},
];

// Display books
function displayBooks() {
    let book = "";
    for (let i = 0; i < books.length; i++) {
        book += "<p>" + books[i].Title + "</p>";
        book += "<p>" + books[i].Author + "</p>";
        book += `<button onclick="removeBook(${books[i].Id})">Remove</button><br>`;
        book += "<hr>";
    }
    document.getElementById("display").innerHTML = book;
}
displayBooks();

// Add books
function addBook() {
  let title = document.getElementById('Title').value;
  let author = document.getElementById('Author').value;
  if(title && author){
    let bookId = books.length + 1;
    books.push({ Id: bookId, Title: title, Author: author });
    displayBooks();
    document.querySelector('form').reset();
    localStorage.setItem("myBooklist", JSON.stringify(books));
  }
 
}
// Remove Book
function removeBook(removeId) {
  let filter = books.filter((remBook, i) => {
      if ( removeId === remBook.Id) {
          books.splice(i, 1);
          displayBooks();
      }
  });
}