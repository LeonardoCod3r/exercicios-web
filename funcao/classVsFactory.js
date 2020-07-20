class Pessoa {
    constructor(nome, sobrenome, idade) {

        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa(`Leonardo`, "Silva", 14);
p1.falar();

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa(`Roberto`);
p2.falar();