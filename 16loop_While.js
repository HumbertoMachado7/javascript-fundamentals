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


(4) ['Maria', 'Sergio', 'Rosa', 'Daniel']
(3) ['Sergio', 'Rosa', 'Daniel']
Hola, Maria
(3) ['Sergio', 'Rosa', 'Daniel']
(2) ['Rosa', 'Daniel']
Hola, Sergio
(2) ['Rosa', 'Daniel']
['Daniel']
Hola, Rosa
['Daniel']
[]
Hola, Daniel

 */

