function add(n1: number | string, n2: number | string) {
  const result = n1 + n2;

  return result;
}

const r1 = add('a', 'b');
const r2 = add(2, 2);

console.log(r1, r2);
