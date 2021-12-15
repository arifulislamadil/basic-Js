// Total Number of Exam 100;
var bangla = 82;
switch (true) {
    case (bangla >= 80 && bangla <= 100):
        console.log("A+");
        break;
    case (bangla >= 70 && bangla < 80):
        console.log("A");
        break;
    case (bangla >= 60 && bangla < 70):
        console.log("A-");
        break;
    case (bangla >= 50 && bangla < 60):
        console.log("B");
        break;
    case (bangla >= 40 && bangla < 50):
        console.log("C");
        break;
    case (bangla >= 33 && bangla < 40):
        console.log("D");
        break;
    case (bangla >= 0 && bangla < 33):
        console.log("F");
        break;
    default:
        console.log("Please input a valid number")
}

//Output: A+