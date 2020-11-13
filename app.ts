function add(num1: number, num2: number, showRes: boolean) {
  if (showRes) {
    console.log(num1 + num2);
  } else {
    return num1 + num2;
  }
}

const n1 = 5,
  n2 = 2.8,
  printResult = true;

const result = add(n1, n2, printResult);

console.log(result);
