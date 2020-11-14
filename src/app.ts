class BookStore {
  constructor(
    private readonly books: string[],
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

class ComicBookStore extends BookStore {
  constructor(
    books: string[],
    categories: string[],
    stock: number,
    public genre: string
  ) {
    super(books, categories, stock);
  }
}

const mainStore = new BookStore(['a', 'b', 'c'], ['bla', 'bla', 'bla'], 3);

const comicStore = new ComicBookStore(
  ['a', 'b', 'c'],
  ['bla', 'bla', 'bla'],
  3,
  'comic'
);

console.log(comicStore);
