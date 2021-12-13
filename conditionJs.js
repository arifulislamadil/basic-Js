var numbers = [2, 3, 4, 5, 1, 22, 4];
numbers[2] = 88;
numbers.push(33)

if (numbers.indexOf(33) != -1) {
    console.log("this number is exisit in the list")
} else {
    console.log("33 doesn't exit in the numbers list")
}

var i = 0;
while (i < 20) {
    console.log(i);
    i += 2;
}

for (var i = 0; i < 10; i += 2) {
    if (i == 6) {
        continue;
    }
    console.log(i)
}
