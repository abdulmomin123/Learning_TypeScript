"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) !== -1)
            this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('momin');
textStorage.addItem('mim');
textStorage.addItem('mim');
textStorage.removeItem('mim');
const numberStorage = new DataStorage();
numberStorage.addItem(22);
numberStorage.addItem(23);
numberStorage.removeItem(23);
const objectStorage = new DataStorage();
objectStorage.addItem({ name: 'momin' });
objectStorage.addItem({ age: 18 });
objectStorage.removeItem({ name: 'momin' });
console.log(textStorage.getItems());
//# sourceMappingURL=app.js.map