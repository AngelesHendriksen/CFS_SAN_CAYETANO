"use strict";
/*
Estructuras de Control
Promedio-Máximo-Mínimo
 ​
• Diseñar un algoritmo que lea números enteros hasta teclear 0
• Determinar y mostrar el máximo, el mínimo y la media de todos los números ingresados
• Pensar cuidadosamente cómo debemos inicializar las variables
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numMax;
var numMin;
var contTotal = 2;
var suma = 0;
var promedio = 0;
var n1 = rls.questionFloat("Ingrese numero: ");
if (n1 !== 0) {
    suma = n1;
    var n2 = rls.questionFloat("ingrese numero: ");
    if (n2 !== 0) {
        suma += n2;
        promedio = suma / 2;
        if (n1 > n2) {
            numMax = n1;
            numMin = n2;
        }
        else {
            numMax = n2;
            numMin = n1;
        }
        var nn = 1;
        while (nn !== 0) {
            nn = rls.questionFloat("Ingrese numero: ");
            if (numMax < nn && nn !== 0)
                numMax = nn; //Determinacion del MAX
            if (numMin > nn && nn !== 0)
                numMin = nn; //Determinacion del MIN
            if (nn !== 0) {
                suma += nn;
                contTotal += 1;
                promedio = suma / contTotal;
            }
        }
        console.log("".concat(numMax, " es el m\u00E1ximo. ").concat(numMin, " es el m\u00EDnimo. ").concat(promedio, " es el promedio."));
    }
    else
        console.log("".concat(n1, " es el m\u00E1ximo. ").concat(n1, " es el m\u00EDnimo. ").concat(n1, " es el promedio."));
}
