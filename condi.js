var myMoney = 10;
var book = 20;
var pen = 10;
var shirt = 100;
var pant = 200;
var shoes = 140;
var watch = 30;

if (myMoney > book) {
    console.log("I can buy a book")
} else if (myMoney >= pen) {
    console.log("I can buy a pen")
} else if (myMoney > shirt) {
    console.log("I can buy a shirt")
} else if (myMoney > pant) {
    console.log("I can buy a pant")
}
else if (myMoney > shoes) {
    console.log("I can buy a shoes")
} else {
    console.log("you have't enough money to buy another from this store")
}
