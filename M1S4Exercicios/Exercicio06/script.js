class Pessoa {
    constructor(nome, idade, nacionalidade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.nacionalidade = nacionalidade;
        this.profissao = profissao;
    }
}


let douglas = new Pessoa('Douglas',38, 'Brasileiro', 'Analista de Sistema')
console.log('Olá, meu nome é ' + douglas.nome + ', tenho ' + douglas.idade + ' ans sou ' + douglas.nacionalidade + ' e minha profissão é '+ douglas.profissao + '.') 

let jorge = new Pessoa('Jorge',45, 'Brasileiro', 'Analista de Qualidade')
console.log('Olá, meu nome é ' + jorge.nome + ', tenho ' + jorge.idade + ' ans sou ' + jorge.nacionalidade + ' e minha profissão é '+ jorge.profissao + '.') 

let julia = new Pessoa('Douglas',25, 'Brasileiro', 'Scrum Master')
console.log('Olá, meu nome é ' + julia.nome + ', tenho ' + julia.idade + ' ans sou ' + julia.nacionalidade + ' e minha profissão é '+ julia.profissao + '.') 