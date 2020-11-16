function merge(obj1: object, obj2: object) {
  return {
    ...obj1,
    ...obj2,
  };
}

const info = merge({ name: 'momin' }, { age: 18 });

console.log(info);
