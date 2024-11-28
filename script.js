// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Sample books data, in real case, this will be fetched from the backend
    const books = [
        { title: 'Book 1', price: '$10', cover: 'cover1.jpg', description: 'Synopsis of book 1' },
        { title: 'Book 2', price: '$15', cover: 'cover2.jpg', description: 'Synopsis of book 2' },
        { title: 'Book 3', price: '$12', cover: 'cover3.jpg', description: 'Synopsis of book 3' },
    ];

    // Populate books section
    const booksContainer = document.querySelector('.books-container');
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-item');
        bookElement.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.price}</p>
            <button onclick="showBookDetails('${book.title}')">Buy</button>
        `;
        booksContainer.appendChild(bookElement);
    });

    // Show book details on the right side
    window.showBookDetails = (title) => {
        const selectedBook = books.find(book => book.title === title);
        const bookDetailContainer = document.getElementById('book-detail');
        bookDetailContainer.innerHTML = `
            <h3>${selectedBook.title}</h3>
            <p>${selectedBook.description}</p>
            <p>Price: ${selectedBook.price}</p>
        `;
    };
});
