function add(num1, num2, showRes) {
    if (showRes) {
        console.log(num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
var n1 = 5, n2 = 2.8, printResult = true;
var result = add(n1, n2, printResult);
console.log(result);
