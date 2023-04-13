import * as rls from "readline-sync"
let dados= rls.questionInt ("ingrese cantidad de dados: ");
let result =0;
let casosposibles= Math.pow(6,dados);
let casosfavorables=1;
result=casosfavorables/casosposibles
console.log (result)