// 1 = 1
// 2 = 2 x 1
// 3 = 3 x 2 x 1
// 4 = 4 x 3 x 2 x 1
// 5 = 5 x 4 x 3 x 2 x 1=120
// 6 = 6 x 5 x 4 x 3 x 2 x 1
// 7 = 7 x 6 x 5 x 4 x 3 x 2 x 1

// n! = n * (n - 1);

function factorialRecursion(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorialRecursion(n - 1);
}
console.log(factorialRecursion(5))
//Output: 120