interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description: string = 'Got no value';

  if (element.length) {
    description = `Got ${element.length} elements`;
  }

  return [element, description];
}

const str = countAndDescribe('fff');

console.log(str);
