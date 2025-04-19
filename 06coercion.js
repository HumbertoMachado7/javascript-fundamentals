4 + "47"; // 47
4 * "7"; // 28
2 + true; // 3
false - 3 // -3

// coercion implicita
var a = 20;
var b = a + "";
console.log(b); // 20 
typeof b; // string

// coercion explicita
typeof a; // number
var c = String (a);
typeof c; // string
console.log (c); // 20
