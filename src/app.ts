interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let description: string = 'Got no value';

  if (element.length) {
    description = `Got ${element.length} elements`;
  }

  return [element, description];
}

const str = countAndDescribe('hi');

console.log(str);
