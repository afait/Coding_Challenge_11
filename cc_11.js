// Task 1 - Creating Book Class


class Book { // create class book with details title, author, isbn, and copies
    constructor(title, author, isbn, copies) {
        this.title = title
        this.author = author
        this.isbn = isbn
        this.copies = copies
    };
getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
}; // returns a string of book details
updateCopies(quantity) {
    this.copies += quantity
}; // updates the quantity of copies by adding the amount that are borrowed or returned
};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // logs the details of the book

book1.updateCopies(-1);
console.log(book1.getDetails()); // logs the updated copy amount of book1 once one is borrowed


// Task 2 - Creating Borrower Class

class Borrower { // Create class borrower with properties name, borrowerId, and borrowed books in an array
    constructor(name, borrowerId, borrowedBooks = []) {
        this.name = name
        this.borrowerId = borrowerId
        this.borrowedBooks = borrowedBooks
    };
    borrowBook(bookTitle) {
        this.borrowedBooks.push(bookTitle)
    }; // Method adds a book title to the list of book titles
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }; // Method removes the returnedbook from the list of borrowedBooks
};

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Create borrower1 with name bookId and one borrowedbook
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Return the title of the book so it returns and empty array


// Task 3 - Creating Library Class

class Library {
    constructor(books = [], borrowers = []) {
        this.books = books
        this.borrowers = borrowers;
    }; // Create class library with an array of books and borrowers
    addBook(book) {
        this.books.push(book);
    }; // Created a method to add a new book to the library
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }; // Created a method that logs all the books' details
    

    // Task 4 - Implementing Book Borrowing
    lendBook(borrowerId, isbn) {
       const book = this.books.find(book => book.isbn === isbn);
       const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId) ;
        // Creates method lendbook with borrowerId and isbn
       if (book && borrower && book.copies > 0) {
        book.updateCopies(-1);
        borrower.borrowBook(book.title);
       } else {
        console.log ("Out of copies")
       }
    }; // Created a method to check if the book exists and is available, if not log "Out of Copies"

    }

    // Task 3 Logs
const library = new Library(); // Created a new library
library.addBook(book1); // Adds book 1 to the library
library.borrowers.push(borrower1)
library.listBooks(); // Lists books in the library

// Task 4 Logs

library.lendBook(201, 123456);
console.log(book1.getDetails()); // Logs the details of book1
console.log(borrower1.borrowedBooks); // Logs the name of the borrowed books