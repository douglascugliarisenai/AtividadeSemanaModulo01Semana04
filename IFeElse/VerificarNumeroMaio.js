//Faça um programa que determine o maior de três números informados.

let numero1 = Math.round(Math.random() * 100)
let numero2 = Math.round(Math.random() * 100)
let numero3 = Math.round(Math.random() * 100)

console.log('Numero 1 gerado' + numero1)
console.log('Numero 1 gerado' + numero2)
console.log('Numero 1 gerado' + numero3)

let numeros = []

numeros.push(numero1)
numeros.push(numero2)
numeros.push(numero3)

console.log('O maior número informado é ' + Math.max.apply(null,numeros))