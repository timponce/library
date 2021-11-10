let myLibrary = [];

function Book(title, author, pages, pagesRead, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.pagesRead = pagesRead
    this.read = read
    Book.prototype = Object.create(myLibrary)
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};

// function removeBookFromLibrary(book) {
//     const index = array.indexOf
//     myLibrary.
// }