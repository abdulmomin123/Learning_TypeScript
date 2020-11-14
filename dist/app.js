"use strict";
class BookStore {
    constructor(books, categories, stock) {
        this.books = books;
        this.categories = categories;
        this.stock = stock;
    }
    getAllBooks() {
        this.books.forEach(book => console.log(book));
    }
    getCategories() {
        this.categories.forEach(category => console.log(category));
    }
    getStock() {
        console.log(this.stock);
    }
    updateStock(value) {
        this.stock = value;
    }
}
class ComicBookStore extends BookStore {
    constructor(books, categories, stock, genre) {
        super(books, categories, stock);
        this.genre = genre;
    }
}
const mainStore = new BookStore(['a', 'b', 'c'], ['bla', 'bla', 'bla'], 3);
const comicStore = new ComicBookStore(['a', 'b', 'c'], ['bla', 'bla', 'bla'], 3, 'comic');
console.log(comicStore);
//# sourceMappingURL=app.js.map