/*Escreva um programa que leia um número de 1 a 7 e imprima o dia da semana correspondente.*/

let diaSemana = Math.round(Math.random() * 6)

console.log('Dia em número selecionado '+diaSemana)

switch(diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido");
}