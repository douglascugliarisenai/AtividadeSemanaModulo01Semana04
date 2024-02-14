//Crie um programa que classifique um dia como útil ou final de semana.

let dataGerada = new Date()


switch(dataGerada.getDay()) {
    case 0:
        console.log("Hoje é Domingo dia " + dataGerada.getDate());
        break;
    case 1:
        console.log("Hoje é Segunda-feira dia " + dataGerada.getDate());    
        break;
    case 2:
        console.log("Hoje é Terça-feira dia " + dataGerada.getDate());
        break;
    case 3:
        console.log("Hoje é Quarta-feira dia " + dataGerada.getDate());
        break;
    case 4:
        console.log("Hoje é Quinta-feira dia " + dataGerada.getDate());
        break;
    case 5:
        console.log("Hoje é Sexta-feira dia " + dataGerada.getDate());
        break;
    case 6:
        console.log("Hoje é Sábado dia " + dataGerada.getDate());
        break;
    default:
        console.log("Número inválido");
}