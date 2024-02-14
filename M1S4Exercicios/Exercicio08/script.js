let numero = Math.round(Math.random() * 100)


function validarParImpar(valor){
    console.log('O número selecionado foi: ' + valor)
    
    if(valor%2==0) {
        console.log("O número selecionado é par");
        
    }else{
        console.log("O número selecionado é impar");
    }
}

validarParImpar(numero)