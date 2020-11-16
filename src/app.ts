class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) !== -1)
      this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('momin');
textStorage.addItem('mim');
textStorage.addItem('mim');
textStorage.removeItem('mim');

const numberStorage = new DataStorage<number>();

numberStorage.addItem(22);
numberStorage.addItem(23);
numberStorage.removeItem(23);

// const objectStorage = new DataStorage<object>();

// objectStorage.addItem({ name: 'momin' });
// objectStorage.addItem({ age: 18 });
// objectStorage.removeItem({ name: 'momin' });

console.log(textStorage.getItems());
