type FnParam = number;

const add: (n1: number, n2: number) => number = (n1, n2) => {
  return n1 + n2;
};

const result = add(2, 2);

console.log(result);
