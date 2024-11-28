// Dummy book data
const books = [
    { title: "Book 1", price: "$10.99", synopsis: "This is the synopsis of Book 1.", cover: "images/book1.png" },
    { title: "Book 2", price: "$15.99", synopsis: "This is the synopsis of Book 2.", cover: "images/book2.png" },
    { title: "Book 3", price: "$20.99", synopsis: "This is the synopsis of Book 3.", cover: "images/book3.png" },
    { title: "Book 4", price: "$12.99", synopsis: "This is the synopsis of Book 4.", cover: "images/book4.png" },
    { title: "Book 5", price: "$18.99", synopsis: "This is the synopsis of Book 5.", cover: "images/book5.png" },
    { title: "Book 6", price: "$22.99", synopsis: "This is the synopsis of Book 6.", cover: "images/book6.png" }
];

// Function to load books dynamically
function loadBooks() {
    const bookGrid = document.getElementById("book-grid");
    books.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Price: ${book.price}</p>
            <button onclick="showBookDetails(${index})">Buy</button>
        `;
        bookGrid.appendChild(bookDiv);
    });
}

// Show book details when the "Buy" button is clicked
function showBookDetails(index) {
    const book = books[index];
    const detailsDiv = document.getElementById("book-details");
    detailsDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Price:</strong> ${book.price}</p>
        <p><strong>Synopsis:</strong> ${book.synopsis}</p>
        <button onclick="closeBookDetails()">Close</button>
    `;
    detailsDiv.style.display = "block";
}

// Close book details
function closeBookDetails() {
    document.getElementById("book-details").style.display = "none";
}

// Function to load popular books in the home section
function loadPopularBooks() {
    const popularBooksDiv = document.getElementById("popular-books");
    books.slice(0, 3).forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Price: ${book.price}</p>
        `;
        popularBooksDiv.appendChild(bookDiv);
    });
}

// Initial loading of books
document.addEventListener("DOMContentLoaded", () => {
    loadBooks();
    loadPopularBooks();
});
