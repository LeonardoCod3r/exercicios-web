// arrow function
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto);
}

log();
log(undefined);
log(null);
log("Oi");

// operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}

function total2(...numeros) {
    return numeros.reduce((previous, current) => previous + current);
}

console.log(total(1, 23, 242));
console.log(total2(1, 23, 242));