const notas = [2, 3, 5, 7, 9]
for (let i in notas) {
    console.log(i, `nota = ${notas[i]}`)
}

const pessoa = {
    nome: "Leonardo",
    sobrenome: "Silva",
    idade: 14,
    peso: 55
}

for (let atributo in pessoa) {
    console.log(atributo, `= ${pessoa[atributo]}`);
}