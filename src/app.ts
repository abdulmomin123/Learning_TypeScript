function printObjProp<T extends object, U extends keyof T>(obj: T, key: U) {
  console.log(obj[key]);
}

printObjProp({ name: 'momin' }, 'name');
