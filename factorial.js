var input = 10;
function myFactorial(factorial) {
    for (var i = 1; i <= input; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log(myFactorial());

//Output: 3628800
