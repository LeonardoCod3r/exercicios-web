function criarPessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    // sem o this não se tem acesso aos parâmetros
    this.getNome = function() {
        return this.nome;
    }

    this.getSobrenome = function() {
        return this.sobrenome;
    }

    this.getIdade = function() {
        return this.idade;
    }

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const pessoa1 = new criarPessoa(`Leonardo`, `Silva`, 14);
pessoa1.falar();
console.log(pessoa1.getNome());