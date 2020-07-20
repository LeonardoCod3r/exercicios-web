// pessoa -> 123 -> {...}
const pessoa = { nome: "Carlos" }
pessoa.nome = `Pedro`;
console.log(pessoa.nome)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' };

Object.freeze(pessoa);
pessoa.nome = "Maria"
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: "João" });
console.log(pessoaConstante);