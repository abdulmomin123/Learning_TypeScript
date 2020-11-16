function countAndDescribe<T extends string | Array<any>>(element: T) {
  let description: string = 'Got no value';

  if (element.length) {
    description = `Got ${element.length} elements`;
  }

  return [element, description];
}

const str = countAndDescribe([1, 2, 2, 2]);

console.log(str);
