var frutas = ["Manzana","Banana","Cereza","Frutilla"];

console.log (frutas);

var masFrutas = frutas.push("Uva"); // agrega al ultimo
console.log(frutas) // ["Manzana","Banana","Cereza","Frutilla","Uva"]

var ultinmo = frutas.pop("Uva") // borra Uva
console.log (frutas); // ["Manzana","Banana","Cereza","Frutilla"]

var nuevaLongitud = frutas.unshift("Limon");
console.log(frutas); // ["Limon","Manzana","Banana","Cereza","Frutilla"]

var borrarFruta = frutas.shift("Limon")
console.log(frutas) // ["Manzana","Banana","Cereza","Frutilla"]

var borrarFruta = frutas.shift("Manzana"); // ["Manzana","Banana","Cereza"] No borra Manzana sino el ultimo Frutilla.

var posicion = frutas.indexOf ("Cereza"); // 2

