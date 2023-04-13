"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var caras = 6; // Es constante porque cada dado tiene siempre 6 caras
var cantDados = rls.questionInt("Ingrese la cantidad de dados: ");
var posibilidad = Math.pow(caras, cantDados); //Hace todas las posibilidades combinando las 6 caras de cada dado
console.log("La posibilidad de sacar 6 en todos los dados es: 1/ ", posibilidad);
