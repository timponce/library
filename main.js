let bookEntry = document.getElementById('book-entry');
let bookEntryCompact = document.getElementById('book-entry-compact');

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

function displayLibrary() {
for (let i=0; i < myLibrary.length; i++) {
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode('Title: ' + myLibrary[i].title + ' ')
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
    console.log('success');
}
};

window.addEventListener('resize', function() {
    if (window.innerWidth < 900) {
        bookEntry.style.display = 'none';
        bookEntryCompact.style.display = 'flex';
    } else if (window.innerWidth >= 900) {
        bookEntry.style.display = 'flex';
        bookEntryCompact.style.display = 'none';
    }
});

//Manually entered placeholder books to have content for formatting.
let book1 = new Book('Dune', 'Frank Herbet', '896', '896', 'Read');
let book2 = new Book('Children of Dune', 'Frank Herbert', '745', '0', 'Not read');
let book3 = new Book('Breakfast of Champions', 'Kurt Vonnegut', '323', '323', 'Read');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);