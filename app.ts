function add(
  n1: number | string,
  n2: number | string,
  outputAs: 'asNumber' | 'asString'
) {
  let result: number | string;

  if (outputAs === 'asNumber') {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}

const r1 = add(2, 2, 'asNumber');
const r2 = add('2', '2', 'asString');

console.log(r1, r2);
