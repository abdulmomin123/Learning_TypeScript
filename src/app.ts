function merge<A, B>(obj1: A, obj2: B) {
  return {
    ...obj1,
    ...obj2,
  };
}

const info = merge({ name: 'momin' }, { age: 18 });

console.log(info.name);
