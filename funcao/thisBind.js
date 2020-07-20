const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao);
        //console.log(saudacao); DA ERRO
    }
}
pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()