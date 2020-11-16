"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('momin');
textStorage.addItem('mim');
textStorage.removeItem('mim');
const numberStorage = new DataStorage();
numberStorage.addItem(22);
numberStorage.addItem(23);
numberStorage.removeItem(23);
console.log(numberStorage.getItems());
//# sourceMappingURL=app.js.map