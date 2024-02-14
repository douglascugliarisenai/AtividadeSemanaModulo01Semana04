let idadeDigitada = window.prompt('Digite sua idade: ');

function mensagem(idade){
    if(idade >= 18){
        console.log('Maior de idade!')
        window.alert('Maior de idade!')
    }else {
        console.log('Menor de idade!')
        window.alert('Menor de idade!')
    }
}

mensagem(idadeDigitada)