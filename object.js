var book = {
    name: ["You will win", "Love yourself", "Be happy"],
    Auther: "Shiv Khara",
    Price: 33,
    publication: "bd press",
    publishData: 2020
}
book.Price = 2000;
book["Price"] = 200;
var BookPrice = 'Price';
book[BookPrice] = 1000;
console.log(book)