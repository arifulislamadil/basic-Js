var friends = ["Abrar", "Adil", "Adnan", "Alvi", "Ashraf"];
var friendsIndex = friends.indexOf("Alvi");
//Output:3
var friendsLength = friends.length;
//Output: 5
var friendsPositonChange = friends[3] = "Arif";
//Output: [ 'Abrar', 'Adil', 'Adnan', 'Arif', 'Ashraf' ]

var friendsPush = friends.push("Tahmina")
//Output:[ 'Abrar', 'Adil', 'Adnan','Arif', 'Ashraf', 'Tahmina' ]
var friendsPop = friends.pop();
//Output: [ 'Abrar', 'Adil', 'Adnan', 'Arif', 'Ashraf' ]

var friendsShift = friends.shift();
//Output: [ 'Adil', 'Adnan', 'Arif', 'Ashraf' ]

var friendsUnshift = friends.unshift("Shafi")
//Output: [ 'Shafi', 'Adil', 'Adnan', 'Arif', 'Ashraf' ]
// console.log(friends)

if ([friends[3] == "l" && friends[1] == "Adil"] && friends[2] == "Adnan") {
    console.log("True")
} else {
    console.log("flase")
}