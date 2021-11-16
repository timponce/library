let bookEntry = document.getElementById('book-entry');
let bookEntryCompact = document.getElementById('book-entry-compact');
let main = document.getElementById('main');
let library = document.getElementById('library');
let bookCard = document.querySelectorAll('book-card');
let errorMsg = document.getElementById('error-msg');

let title = document.getElementById('title-input');
let author = document.getElementById('author-input');
let pages = document.getElementById('pages-input');
let pagesRead = document.getElementById('pages-read-input');

let titleCompact = document.getElementById('title-input-compact');
let authorCompact = document.getElementById('author-input-compact');
let pagesCompact = document.getElementById('pages-input-compact');
let pagesReadCompact = document.getElementById('pages-read-input-compact');

let myLibrary = [];

class Book {
    constructor(title, author, pages, pagesRead) {
        this.title = title
        this.author = author
        this.pages = pages
        this.pagesRead = pagesRead
    }
}
//Refactor below using class.

// function Book(title, author, pages, pagesRead) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.pagesRead = pagesRead
// };

function addNewBook() {
    if (title.value == '' || author.value == '' || pages.value == '' || pagesRead.value == '') {
        errorMsg.innerHTML = 'Please fill out all fields.';
    } else if (isNaN(pages.value) || isNaN(pagesRead.value)) {
        errorMsg.innerHTML = 'Pages and Pages Read must be numbers.';
    } else if (+pages.value < +pagesRead.value) {
        errorMsg.innerHTML = 'Pages Read must be less than Pages.';
    } else if (title.value != '' && author.value != '' && pages.value != '' && pagesRead.value != '') {
    let book = new Book(title.value, author.value, pages.value, pagesRead.value);
    title.value = '';
    author.value = '';
    pages.value = '';
    pagesRead.value = '';
    addBookToLibrary(book);
    displayLibrary();
    errorMsg.innerHTML = '';
    }
};

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

function removeBookFromLibrary(a) {
    myLibrary.splice(a, 1);
    displayLibrary();
}

function pageDecrement(a) {
    if (+myLibrary[a].pagesRead > 0) {
        myLibrary[a].pagesRead = --myLibrary[a].pagesRead;
        displayLibrary();
    }
}

function pageIncrement(a) {
    if (+myLibrary[a].pagesRead < +myLibrary[a].pages) {
        myLibrary[a].pagesRead = ++myLibrary[a].pagesRead;
        displayLibrary();
    }
}

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
        bookCard.setAttribute('data-number', i);
        library.appendChild(bookCard);
    let bookCardRemoveBtn = document.createElement('button');
        bookCardRemoveBtn.innerHTML = 'x';
        bookCardRemoveBtn.classList.add('remove-book-btn');
        bookCardRemoveBtn.setAttribute('data-number', i);
        bookCardRemoveBtn.setAttribute('onclick', 'removeBookFromLibrary()');
        bookCard.appendChild(bookCardRemoveBtn)
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
    let bookCardPagesContainer = document.createElement('div');
        bookCardPagesContainer.classList.add('book-card-pages-container');
        bookCardBottom.appendChild(bookCardPagesContainer);
    let bookPagesBtnMinus = document.createElement('button');
        bookPagesBtnMinus.innerHTML = '-';
        bookPagesBtnMinus.classList.add('book-pages-decrement');
        bookPagesBtnMinus.setAttribute('onclick', 'pageDecrement('+i+')');
        bookPagesBtnMinus.setAttribute('data-number', i);
        bookCardPagesContainer.appendChild(bookPagesBtnMinus);
    let bookCardPagesFraction = document.createElement('div');
        bookCardPagesFraction.innerHTML = myLibrary[i].pagesRead + '/' + myLibrary[i].pages;
        bookCardPagesFraction.classList.add('book-card-pages-fraction');
        bookCardPagesContainer.appendChild(bookCardPagesFraction);
    let bookPagesBtnPlus = document.createElement('button');
        bookPagesBtnPlus.innerHTML = '+';
        bookPagesBtnPlus.classList.add('book-pages-increment');
        bookPagesBtnPlus.setAttribute('onclick', 'pageIncrement('+i+')');
        bookPagesBtnPlus.setAttribute('data-number', i);
        bookCardPagesContainer.appendChild(bookPagesBtnPlus);
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