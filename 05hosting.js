console.log(miNombre); // undefined

var miNombre; // variable declarada
miNombre = "Dario"; // variable inicializada

console(miNombre); // ahora sí muestra el valor "Dario"

saludar (); // llamo a la funcion 

function saludar(){      // estoy inicializando mi funcion
    console.log ("Hola "+ miNombre);
};

saludar ();