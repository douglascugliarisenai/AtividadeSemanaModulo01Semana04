/*Crie um programa que classifique um número como positivo, negativo ou zero.*/

const min = -10
const max = 10
let numeroSelecionado = Math.round(Math.random() * (max - min + 1) + min)
console.log("Número Selecionado é " + numeroSelecionado);

switch(true) {
    case numeroSelecionado > 0:
        console.log("O número é positivo.");
        break;
    case numeroSelecionado < 0:
        console.log("O número é negativo.");
        break;
    default:
        console.log("O número é zero.");
}