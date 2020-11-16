class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('momin');
textStorage.addItem('mim');
textStorage.removeItem('mim');

const numberStorage = new DataStorage<number>();

numberStorage.addItem(22);
numberStorage.addItem(23);
numberStorage.removeItem(23);

console.log(numberStorage.getItems());
