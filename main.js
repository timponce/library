let bookEntry = document.getElementById('book-entry');
let bookEntryCompact = document.getElementById('book-entry-compact');
let main = document.getElementById('main');
let library = document.getElementById('library');
let bookCard = document.querySelectorAll('book-card');

let title = document.getElementById('title-input');
let author = document.getElementById('author-input');
let pages = document.getElementById('pages-input');
let pagesRead = document.getElementById('pages-read-input');

let titleCompact = document.getElementById('title-input-compact');
let authorCompact = document.getElementById('author-input-compact');
let pagesCompact = document.getElementById('pages-input-compact');
let pagesReadCompact = document.getElementById('pages-read-input-compact');

let myLibrary = [];

function Book(title, author, pages, pagesRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.pagesRead = pagesRead
    Book.prototype = Object.create(myLibrary)
};

function addNewBook() {
    let book = new Book(title.value, author.value, pages.value, pagesRead.value);
    title.value = '';
    author.value = '';
    pages.value = '';
    pagesRead.value = '';
    addBookToLibrary(book);
    displayLibrary();
}

function addNewBookCompact() {
    let book = new Book(titleCompact.value, authorCompact.value, pagesCompact.value, pagesReadCompact.value);
    titleCompact.value = '';
    authorCompact.value = '';
    pagesCompact.value = '';
    pagesReadCompact.value = '';
    addBookToLibrary(book);
    displayLibrary();
}

function addBookToLibrary(element) {
    myLibrary.push(element);
};

function displayLibrary() {
library.remove();
library = document.createElement('div');
library.id = 'library';
main.appendChild(library);
for (let i=0; i < myLibrary.length; i++) {
    createBookCard(i)
}
};

function createBookCard(i) {
    let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        library.appendChild(bookCard);
    let bookCardTop = document.createElement('div');
        bookCardTop.classList.add('book-card-top');
        bookCard.appendChild(bookCardTop);
    let bookCardBottom = document.createElement('div');
        bookCardBottom.classList.add('book-card-bottom');
        bookCard.appendChild(bookCardBottom);
    let bookCardTitle = document.createElement('div');
        bookCardTitle.innerHTML = myLibrary[i].title;
        bookCardTitle.classList.add('book-card-title');
        bookCardTop.appendChild(bookCardTitle)
    let bookCardBy = document.createElement('div');
        bookCardBy.innerHTML = 'by';
        bookCardBy.classList.add('book-card-by');
        bookCardTop.appendChild(bookCardBy)
    let bookCardAuthor = document.createElement('div');
        bookCardAuthor.innerHTML = myLibrary[i].author;
        bookCardAuthor.classList.add('book-card-author');
        bookCardTop.appendChild(bookCardAuthor)
    let bookCardPagesFraction = document.createElement('div');
        bookCardPagesFraction.innerHTML = myLibrary[i].pagesRead + '/' + myLibrary[i].pages;
        bookCardPagesFraction.classList.add('book-card-pages-fraction');
        bookCardBottom.appendChild(bookCardPagesFraction);
    let bookCardPagesFractionLabel = document.createElement('div');
        bookCardPagesFractionLabel.innerHTML = 'pages read';
        bookCardPagesFractionLabel.classList.add('book-card-pages-fraction-label');
        bookCardBottom.appendChild(bookCardPagesFractionLabel);
}

if (window.innerWidth < 900) {
    bookEntry.style.display = 'none';
    bookEntryCompact.style.display = 'flex';
} else if (window.innerWidth >= 900) {
    bookEntry.style.display = 'flex';
    bookEntryCompact.style.display = 'none';
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
// let book1 = new Book('Dune', 'Frank Herbet', '896', '896');
// let book2 = new Book('Children of Dune', 'Frank Herbert', '745', '0');
// let book3 = new Book('Breakfast of Champions', 'Kurt Vonnegut', '323', '323');

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);