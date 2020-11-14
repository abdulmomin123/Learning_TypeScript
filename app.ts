// Function return types & void
const add: Function = (n1: number, n2: number) => {
  return n1 + n2;
};

// void type
function greet(name: string): void {
  console.log(name);
}

greet('momin');

const r1 = add(2, 2);

console.log(r1);
