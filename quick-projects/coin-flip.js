//random number between 0 and 1
let random = Math.floor(Math.random() * 2);
//1 == heads(true) 0 == tails(false)
let coin = random ? "Heads" : "Tails";
console.log(coin);