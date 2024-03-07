class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
}

class Shelf {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    deleteBook(book) {
        const index = this.books.indexOf(book);
        this.books.splice(index, 1);
    }

    printBooks() {
        this.books.forEach((book) => {
            console.log(book.name);
        });
    }
}

const shelf = new Shelf();
const book1 = new Book('Harry Potter', 'J.K. Rowling');
const book2 = new Book('The Hobbit', 'J.R.R. Tolkien');
shelf.addBook(book1);
shelf.addBook(book2);
shelf.printBooks();
console.log('---');
shelf.deleteBook(book1);
shelf.printBooks();
