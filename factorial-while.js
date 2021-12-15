
function myfact(number) {
    var i = 1;
    var fact = 1;
    while (i <= number) {
        fact = fact * i;
        i++;
    }
    return fact;
}
console.log(myfact(6));
//Output: 720

function myFactorial(number) {
    var fact = 1;
    var i = number;
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;
}
console.log(myFactorial(5));
//Output: 720;













