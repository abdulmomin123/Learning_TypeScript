function merge<A extends object>(...allObj: A[]): A {
  return Object.assign({}, ...allObj);
}

const info = merge({ name: 'momin' }, { age: 18 });

console.log(info.name);
