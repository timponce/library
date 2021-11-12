let bookEntry = document.getElementById('book-entry');
let bookEntryCompact = document.getElementById('book-entry-compact');
let library = document.getElementById('library');

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

function createBookCard() {
    let bookCard = document.createElement('div')
    bookCard.classList.add('book-card');
    library.appendChild(bookCard);
    let bookCardTop = document.createElement('div');
    bookCardTop.classList.add('book-card-top');
    bookCard.appendChild(bookCardTop);
    let bookCardBottom = document.createElement('div');
    bookCardBottom.classList.add('book-card-bottom');
    bookCard.appendChild(bookCardBottom);
    let bookCardTitle = document.createElement('div');
    bookCardTitle.classList.add('book-card-title');
    bookCardTop.appendChild(bookCardTitle)
    let bookCardBy = document.createElement('div');
    bookCardBy.classList.add('book-card-by');
    bookCardTop.appendChild(bookCardBy)
    let bookCardAuthor = document.createElement('div');
    bookCardAuthor.classList.add('book-card-author');
    bookCardTop.appendChild(bookCardAuthor)
    let bookCardPagesFraction = document.createElement('div');
    bookCardPagesFraction.classList.add('book-card-pages-fraction');
    bookCardBottom.appendChild(bookCardPagesFraction);
    let bookCardPagesFractionLabel = document.createElement('div');
    bookCardPagesFractionLabel.classList.add('book-card-pages-fraction-label');
    bookCardBottom.appendChild(bookCardPagesFractionLabel);
}

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