const books = [
    { title: "Book 1", price: "$10.99", synopsis: "This is the synopsis of Book 1.", cover: "images/book1.png" },
    { title: "Book 2", price: "$15.99", synopsis: "This is the synopsis of Book 2.", cover: "images/book2.png" },
    { title: "Book 3", price: "$20.99", synopsis: "This is the synopsis of Book 3.", cover: "images/book3.png" },
];

function loadBooks() {
    const booksGrid = document.querySelector('.books-grid');
    books.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Price: ${book.price}</p>
            <button>Buy</button>
        `;
        const button = bookDiv.querySelector('button');
        button.addEventListener('click', () => showDetails(index));
        booksGrid.appendChild(bookDiv);
    });
}

function showDetails(index) {
    const book = books[index];
    const bookDetails = document.querySelector('.book-details');
    bookDetails.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Price:</strong> ${book.price}</p>
        <p><strong>Synopsis:</strong> ${book.synopsis}</p>
        <button onclick="closeDetails()">Close</button>
    `;
    bookDetails.style.display = 'block';

    // Optional: Add overlay to dim the background
    const overlay = document.createElement('div');
    overlay.classList.add('book-details-overlay');
    document.body.appendChild(overlay);
}

function closeDetails() {
    document.querySelector('.book-details').style.display = 'none';

    // Remove overlay
    const overlay = document.querySelector('.book-details-overlay');
    if (overlay) {
        overlay.remove();
    }
}

document.addEventListener('DOMContentLoaded', loadBooks);
