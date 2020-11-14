function add(n1: number, n2: number, outputAs: string) {
  let result;

  if (outputAs === 'asNumber') {
    result = +n1 + +n2;
  } else {
    result = n1 + n2;
  }

  return result;
}

const r1 = add(2, 2, 'asNumber');
const r2 = add(2, 2, 'asString');

console.log(r1, r2);
