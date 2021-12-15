var factorial = 1;
function myfact(fact) {
    for (let i = 1; i <= 5; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log(myfact(factorial))
// Output: 120


function getFact(number) {
    let fact = 1;
    for (var i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}

var input = 5;
var result = getFact(input)

console.log("factorial of 5 is ", result)
//Output: 120