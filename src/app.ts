class BookStore {
  constructor(
    private books: string[],
    private categories: string[],
    private stock: number
  ) {}

  getAllBooks() {
    this.books.forEach(book => console.log(book));
  }

  getCategories() {
    this.categories.forEach(category => console.log(category));
  }

  getStock() {
    console.log(this.stock);
  }

  updateStock(value: number) {
    this.stock = value;
  }
}

const mainStore = new BookStore(['a', 'b', 'c'], ['bla', 'bla', 'bla'], 3);

mainStore.updateStock(100);

console.log(mainStore.getStock());
