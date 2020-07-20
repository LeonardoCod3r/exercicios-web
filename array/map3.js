Array.prototype.map2 = function(callback) {
    const array = []
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[0], i, this));
    }
    return array;
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços.
let resultado = carrinho.map2(function(name, indice) {
    return JSON.parse(carrinho[indice])["preco"];
});
console.log(resultado);