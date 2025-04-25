/*
Define una nueva función constructora llamada Producto.
Esta función debe aceptar tres parámetros: nombre (string), precio (número) y categoria (string).
Dentro de la función constructora, usa this para asignar estos parámetros a las propiedades correspondientes del objeto que se está creando (ej. this.nombre = nombre;).
Crea (instancia) manualmente 3 objetos Producto diferentes usando el operador new y tu función constructora. Asigna cada uno a una variable distinta (ej. producto1, producto2, producto3). Dale valores inventados por ti.
Muestra en la consola cada uno de los objetos creados para verificar su contenido.

*/

function Producto(nombre,precio,categoria){
    this.nombre=nombre;
    this.precio=precio;
    this.categoria=categoria;
}

let producto1 = new Producto("Manzana",1500,"Fruta");
let producto2 = new Producto("Espinacas",2000,"Verdura");
let producto3 = new Producto("Limon",500,"Fruta");

console.log(producto1);
console.log(producto2);
console.log(producto3);

/*

Modifica la función constructora Producto del ejercicio anterior.
Añade un método (una función como propiedad) llamado mostrarDetalle directamente dentro de la función constructora usando this.
Este método mostrarDetalle debe imprimir en consola una cadena de texto formateada que diga algo como: Producto: [nombre], Categoría: [categoria], Precio: $[precio]. (Usa this dentro del método para acceder a las propiedades del producto).
Crea una nueva instancia de Producto.
Llama al método mostrarDetalle() de esa nueva instancia para ver si funciona.

*/

function Producto (nombre,precio,categoria){
    this.nombre=nombre;
    this.precio=precio;
    this.categoria=categoria;
    this.mostrarDetalle=function(){
        console.log(`Producto: ${this.nombre}, Categoria: ${this.categoria}, Precio: $${this.precio}`);
    };
}

let productoConMetodo1 = new Producto ("Teclado Mecanico", 8500, "Tecnologia");
let productoConMetodo2 = new Producto ("Te", 1600, "Cafeteria");
let productoConMetodo3 = new Producto ("Helado", 3500,"Heladeria");

console.log(productoConMetodo1);
productoConMetodo1.mostrarDetalle();

console.log(productoConMetodo2);
productoConMetodo2.mostrarDetalle();

console.log(productoConMetodo3);
productoConMetodo3.mostrarDetalle();

/*

Ejercicio 3: Creación en Bucle (Basado en 19creandoListaDeAutos.js)
Utiliza la función constructora Producto (con su método mostrarDetalle incluido) del ejercicio anterior.
Define arrays con datos simulados: nombresProducto (ej: ["Laptop", "Mouse", "Monitor", "Silla Gamer"]), categoriasProducto (ej: ["Tecnología", "Oficina", "Gaming"]) y un rango de precios (ej: precioMin = 100, precioMax = 1500).
Declara un array vacío llamado inventario.
Escribe un bucle for que se ejecute 15 veces.
Dentro del bucle:
Genera un nombre, categoría y precio aleatorios usando los datos simulados (similar a como generaste marca/modelo/año para los autos).
Crea una nueva instancia de Producto con esos datos aleatorios usando new Producto(...).
Agrega el producto recién creado al array inventario usando .push().
Después del bucle, muestra en consola cuántos productos se crearon (inventario.length) y muestra los detalles del primer y último producto en el inventario llamando a su método mostrarDetalle().

*/




/*

Ejercicio 4: Filtrando el Inventario (Inspirado en 21metodos_RecrridoArray.js)
Usa el array inventario que llenaste en el Ejercicio 3.
Utiliza el método .filter() para crear un nuevo array llamado productosTecnologia que contenga únicamente los productos cuya categoria sea exactamente "Tecnología".
Muestra el array productosTecnologia en la consola.
Utiliza el método .filter() de nuevo para crear un nuevo array llamado productosBaratos que contenga únicamente los productos cuyo precio sea menor o igual a 500.
Muestra el array productosBaratos en la consola.

*/


/*

Ejercicio 5: Mapeando el Inventario (Inspirado en 21metodos_RecrridoArray.js)
Usa el array inventario del Ejercicio 3.
Utiliza el método .map() para crear un nuevo array llamado nombresDeProductos que contenga únicamente los nombres de todos los productos en el inventario.
Muestra el array nombresDeProductos en la consola.
Utiliza el método .map() para crear un nuevo array llamado productosConIVA donde cada elemento sea un nuevo objeto con las mismas propiedades que el original (nombre, precio, categoria) pero añadiendo una nueva propiedad llamada precioConIVA. El valor de precioConIVA debe ser el precio original multiplicado por 1.21 (simulando un IVA del 21%).
Muestra el array productosConIVA en la consola.

*/