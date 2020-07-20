function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(23, 32, 43));
console.log(soma(232, 32, "Teste"));
console.log(soma(10, "20"));