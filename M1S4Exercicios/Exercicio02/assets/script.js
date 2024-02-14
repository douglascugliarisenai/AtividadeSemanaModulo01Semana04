let nome

nomeDigitado = window.prompt('Digite seu nome');

function mensagem(nome){
    document.getElementById('mensagem').innerText = 'Bem vindo, ' + nome
}

mensagem(nomeDigitado)