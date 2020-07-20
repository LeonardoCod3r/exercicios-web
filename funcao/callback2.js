const notas = [3, 5, 6, 7, 5, 8, 10];

// sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

// com callback

notasBaixas = notas.filter(nota => nota < 7);
console.log(notasBaixas);