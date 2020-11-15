interface add {
  (n1: number, n2: number): number;
}

const addition: add = (n1, n2) => n1 + n2;

const res = addition(2, 2);

console.log(res);
