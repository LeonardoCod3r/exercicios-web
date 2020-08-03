"use strict";
exports.__esModule = true;
var produto_1 = require("./produto");
function exibir(v) {
    console.log(v.nome + " custa " + v.preco + "!");
}
var c = new produto_1.Carro;
c.nome = 'Civic';
c.preco = 89499.00;
exibir(c);
