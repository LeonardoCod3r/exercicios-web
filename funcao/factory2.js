function novoProduto(nome, preco, desconto) {
    return {
        nome,
        preco,
        precoComDesconto() {
            return preco - this.descontoReais();
        },
        descontoReais() {
            return preco * desconto / 100;
        },
        desconto: desconto
    }
}

console.log(novoProduto(`Iphone`, 13000.99, 10).precoComDesconto());
console.log(novoProduto(`Iphone 10`, 2000.0, 10).descontoReais());
console.log(novoProduto(`Notebook`, 1200.0, 10));