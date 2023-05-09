let randamNumber = Math.ceil(Math.random() * 10);
console.log(randamNumber);
//let userInput = document.getElementById("inputvalue");
function myFunction() {
var Int_value = document.getElementById("data").value;
// document.getElementById("demo").innerHTML = x;
let y = Int_value;
 if (y == randamNumber) {
document.getElementById("demo").innerHTML =
"congratulations you have own the game";
} else if (y > randamNumber && y > 5) {
document.getElementById("demo").innerHTML = "number is too long";
} else {
console.log("near to won the game "); 
document.getElementById("demo").innerHTML = "number is near win the game ";
}
console.log(Int_value);
}
function refresh() {
var b = "";
document.getElementById("data").value = b;
document.getElementById("demo").innerHTML = "";
console.log(b);
}
function newGame() {
 randamNumber = Math.ceil(Math.random() * 10);
 console.log(randamNumber);
 document.getElementById("data").value = "";
 document.getElementById("demo").innerHTML = "";
 return randamNumber;
}
let randamNumber1 = newGame();
console.log("random", randamNumber1);