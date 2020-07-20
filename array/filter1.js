const produtos = [
    { nome: 'Notebook', preco: 2399, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 35.0, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
console.log(produtos.filter(function(p) {
    return p.fragil
}));
console.log(produtos.filter(function(p) {
    return p.preco > 500.0
}))
const isFragil = e => e.fragil;
const isCaro = e => e.preco >= 500.0;
console.log(produtos.filter(isFragil).filter(isCaro));