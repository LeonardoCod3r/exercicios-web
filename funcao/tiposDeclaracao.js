console.log(soma(3, 4)); //pode chamar antes de ser declarada
//console.log(sub(2, 2));
//console.log(mult(2, 3)); chamar depois que for declarada

//function declaration
function soma(x, y) {
    return x + y;
}

//function expression
const sub = function(x, y) {
    return x - y;
}

//named function expression

const mult = function mult(x, y) {
    return x * y;
}