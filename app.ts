// Function return types & void
const add = (n1: number, n2: number, cb: (a: number) => void) => {
  const result = n1 + n2;

  cb(result);
};

const r1 = add(2, 2, result => {
  console.log(result);
});

// console.log(r1);
