const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log(`Parabéns, você foi aprovado! Sua nota foi: ${nota}`);
    } else {
        console.log(`Você foi reprovado! Sua nota foi: ${nota}`);
    }
}
imprimirResultado(7);
imprimirResultado(6.9);
imprimirResultado("Se fudeu") //Linguagem fracamente tipada