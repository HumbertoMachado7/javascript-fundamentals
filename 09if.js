if (true) {
    console.log("Hola"); // Hola
}

if (false) {
    console.log ("Hola") // No hace nada
}

if (false) {
    console.log ("Hola"); // No hace nada
} else {
    console.log ("es falso") // es falso
}

// y mas else if para ir validando hasta encontrar la respuesta
let edad = 18;

if (edad === 18){
    console.log("Puedes votar, es tu 1ra votacion");
} else if (edad > 18){    // elseif busca otra posible validacion.
    console.log ("Puedes votar de nuevo");
} else {
    console.log ("Aun no puedes votar"); // si no valida ninguna, ejecuta esto.
}

// validacion ternario
condition ? true : false;

var numero = 2;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy un uno";
console.log (resultado); // No, no soy un uno