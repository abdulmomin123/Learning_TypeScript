function merge<A extends object>(...allObj: A[]) {
  return {
    ...allObj,
  };
}

const info = merge({ name: 'momin' }, { age: 18 });

console.log(info);
