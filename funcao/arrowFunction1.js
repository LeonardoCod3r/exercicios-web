let dobro = function(a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI));

let ola = function() {
    return `Olá amigo`;
}

ola = () => `Olá amigo`;
ola = _ => `Olá amigo`; //possui um parâmetro
console.log(ola());