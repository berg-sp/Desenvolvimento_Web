console.log("Lista 2: atividade1.js")
var salarioAntigo1 = 3275
var salarioAntigo2 = 1500
var salarioAntigo3 = 5000
var salarioAntigo4 = 2360
var salarioAntigo5 = 3830
var reajusteSalarial = 10

var valorReajuste1 = salarioAntigo1 + reajusteSalarial / 100
var salarioFinal1 = salarioAntigo1 + valorReajuste1

var valorReajuste2 = salarioAntigo2 + reajusteSalarial / 100
var salarioFinal2 = salarioAntigo2 + valorReajuste2

var valorReajuste3 = salarioAntigo3 + reajusteSalarial / 100
var salarioFinal3 = salarioAntigo3 + valorReajuste3

var valorReajuste4 = salarioAntigo4 + reajusteSalarial / 100
var salarioFinal4 = salarioAntigo4 + valorReajuste4

var valorReajuste5 = salarioAntigo5 + reajusteSalarial / 100
var salarioFinal5 = salarioAntigo5 + valorReajuste5

console.log("---Salários atualizados---")
console.log("Cleber Ganha R$" + salarioAntigo1 + ", com reajuste de " + reajusteSalarial + "% passa a ganhar R$" + (salarioAntigo1 + (salarioAntigo1 * reajusteSalarial / 100)))
console.log("Carol Ganha R$" + salarioAntigo2 + ", com reajuste de " + reajusteSalarial + "% passa a ganhar R$" + (salarioAntigo2 + (salarioAntigo2 * reajusteSalarial / 100)))
console.log("Julio Ganha R$" + salarioAntigo3 + ", com reajuste de " + reajusteSalarial + "% passa a ganhar R$" + (salarioAntigo3 + (salarioAntigo3 * reajusteSalarial / 100)))
console.log("Tereza Ganha R$" + salarioAntigo4 + ", com reajuste de " + reajusteSalarial + "% passa a ganhar R$" + (salarioAntigo4 + (salarioAntigo4 * reajusteSalarial / 100)))
console.log("Nubia Ganha R$" + salarioAntigo5 + ", com reajuste de " + reajusteSalarial + "% passa a ganhar R$" + (salarioAntigo5 + (salarioAntigo5 * reajusteSalarial / 100)))