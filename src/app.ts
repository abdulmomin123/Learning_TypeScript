class BookStore {
  books: string[];
  categories: string[];
  stock: number;

  constructor(books: string[], categories: string[], stock: number) {
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
