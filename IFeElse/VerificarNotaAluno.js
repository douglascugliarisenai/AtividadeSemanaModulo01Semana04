/*Escreva um programa que determine se um aluno foi aprovado, 
reprovado ou está em recuperação, considerando que a nota mínima 
para aprovação é 7, e para recuperação é 5.*/

let notaAluno = Math.round(Math.random() * 11)

if(notaAluno >= 7){
    console.log('O Aluno foi aprovado com nota ' + notaAluno)
}else if(notaAluno < 7 && notaAluno >= 5){
    console.log('O Aluno esta em recuperação com nota ' + notaAluno)
}else {
    console.log('O Aluno foi reprovado com nota ' + notaAluno)
}