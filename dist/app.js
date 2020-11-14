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
const mainStore = new BookStore(['a', 'b', 'c'], ['bla', 'bla', 'bla'], 3);
mainStore.updateStock(100);
console.log(mainStore.getStock());
//# sourceMappingURL=app.js.map