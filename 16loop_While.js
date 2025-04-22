 var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

 function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
 };

 while(estudiantes.length > 0) {
    console.log (estudiantes)
    var estudiante = estudiantes.shift(); // saca el primero del array y guarda en variable estudiante.
    console.log (estudiantes)
    saludarEstudiantes(estudiante);
 };


 /*

 (3) ['Sergio', 'Rosa', 'Daniel']
Hola, Maria

(2) ['Rosa', 'Daniel']
Hola, Sergio

['Daniel']
Hola, Rosa

[]
Hola, Daniel

 */

