"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%
 ​
Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía
 ​
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)
*/
var rls = require("readline-sync");
var estudiante = rls.question("Ingrese nombre del alumno: ");
var notaPractica = 0.1;
var notaProblemas = 0.5;
var notaTeorica = 0.4;
var notaTotal = 0;
while (estudiante !== '') {
    var i = 0;
    for (i = 0; i < 3; i++) {
        var notas = rls.questionFloat("Ingrese las notas del alumno: ");
        if (i == 0 && notas >= 0 && notas <= 10) {
            notaTotal = notas * notaPractica;
        }
        else if (i == 1 && notas >= 0 && notas <= 10) {
            notaTotal = notaTotal + (notas * notaProblemas);
        }
        else if (notas >= 0 && notas <= 10) {
            notaTotal = notaTotal + (notas * notaTeorica);
        }
        else {
            i = -1;
            estudiante = rls.question("Ingrese el nombre del alumno: ");
        }
    }
    console.log("El alumno ".concat(estudiante, ", finalizo con una nota de: ").concat(notaTotal));
    estudiante = rls.question("Ingrese el nombre del alumno: ");
}
