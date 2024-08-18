const addBook = document.querySelector('#AddBook');
const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('#btn2');
const BookName = document.querySelector('#name');
const author = document.querySelector('#author');
const page = document.querySelector('#page');
const genre = document.querySelector('#genre');
const addBtn = document.querySelector('#btn');
const remove = document.querySelector('#remove');
const form = document.querySelector('form');
const display = document.querySelector('.display');

addBook.addEventListener('click', function() {
    dialog.showModal();
})
closeBtn.addEventListener('click', function() {
    dialog.close();
})
const myLibrary = [];

function Book(name, author, page, genre)
{
    this.name = name;
    this.author = author;
    this.page = page;
    this.genre = genre;
}

addBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let title = BookName.value;
    let authorEl = author.value;
    let numpage = page.value;
    let genreno = genre.value;

    let newBooks = new Book(title, authorEl, numpage, genreno);
    console.log("Button is clicked!");
    myLibrary.push(newBooks);

    form.reset();
    dialog.close();
})
function displayBooks()
{
    const libraryList = document.querySelector('.output-box');
    libraryList.innerHTML = "";
    myLibrary.forEach(function(book) {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
        <li>
        <h3>Title of the Book: ${book.name}</h3>
        <p><strong>Author:- </strong> ${book.author}</p>
        <p><strong>Pages:- </strong> ${book.page}</p>
        <p><strong>Genre:- </strong> ${book.genre}</p>
        </li>`;
        libraryList.appendChild(bookItem);
    })
}
display.addEventListener('click', (event) => {
    console.log(event);
    displayBooks();
})
