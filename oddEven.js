var num = 7676;
var result = num % 2;
if (result == 0) {
    console.log("This number is Even Number")
} else {
    console.log("This number is Odd Number")
}

function isEven(numbers) {
    if (numbers % 2 == 0) {
        return true;
    } else {
        return false;
    }


}
var input = 34;
var result = isEven(input);
console.log(result)


function isOdd(numbers) {
    if (numbers % 2 != 0) {
        return true;
    } else {
        return false;
    }


}
var input = 343;
var result = isOdd(input);
console.log(result)


