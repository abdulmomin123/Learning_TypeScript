"use strict";
class BookStore {
    constructor(books, categories, stock) {
        this.books = books;
        this.categories = categories;
        this.stock = stock;
    }
    getAll() {
        this.books.forEach(book => console.log(book));
    }
    getCategories() {
        this.categories.forEach(category => console.log(category));
    }
    getStock() {
        console.log(this.stock);
    }
}
//# sourceMappingURL=app.js.map