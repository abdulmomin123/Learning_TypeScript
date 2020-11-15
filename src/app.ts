class BookStore {
  constructor(
    protected readonly books: string[],
    protected categories: string[],
    protected stock: number
  ) {}

  getAllBooks() {
    this.books.forEach(book => console.log(book));
  }

  getCategories() {
    this.categories.forEach(category => console.log(category));
  }

  getStock() {
    console.log(`${this.stock}`);
  }

  updateStock(value: number) {
    this.stock = value;
  }
}

class ComicBookStore extends BookStore {
  constructor(
    books: string[],
    categories: string[],
    stock: number,
    public genre: string
  ) {
    super(books, categories, stock);
  }

  getStock() {
    console.log(`the stock is ${this.stock}`);
  }
}

const mainStore = new BookStore(['a', 'b', 'c'], ['bla', 'bla', 'bla'], 3);

const comicStore = new ComicBookStore(
  ['a', 'b', 'c'],
  ['bla', 'bla', 'bla'],
  3,
  'comic'
);

mainStore.getStock();
comicStore.getStock();
