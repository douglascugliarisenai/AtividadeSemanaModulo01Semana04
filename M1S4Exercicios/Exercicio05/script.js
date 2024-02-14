
const min = -10
const max = 10
let numeroSelecionado = Math.round(Math.random() * (max - min + 1) + min)
console.log("Número Selecionado é " + numeroSelecionado);

if (numeroSelecionado < 0) {
    console.log('O número selecionado é negativo.') 
}else if (numeroSelecionado == 0){
    console.log('O número selecionado é zero.') 
}else {
    console.log('O número selecionado é positivo.') 
}