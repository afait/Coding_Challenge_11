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
