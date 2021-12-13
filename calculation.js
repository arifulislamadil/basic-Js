function inchesFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var dadaInches = 132;
var feet = inchesFeet(dadaInches);
console.log(feet)
var dadiInches = 144;
var feet = inchesFeet(dadiInches);
console.log(feet)
var uncleInches = 160;
var feet = inchesFeet(uncleInches);
console.log(feet)

function mileToKm(mile) {
    var km = mile * 1.60934;
    return km;
}

var mile = 10;
var result = mileToKm(mile)
console.log(result)

