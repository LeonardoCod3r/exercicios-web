// estratégia 1 
function soma1(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}
// 0 retorna false
console.log(soma1(), soma1(2, 3), soma1(5), soma1(2, 3, 4));

//estratégia 2, 3, 4

function soma2(a, b, c) {
    a = a != undefined ? a : 0;
    b = 1 in arguments ? b : 0;
    c = isNaN(c) ? 0 : c;
    return a + b + c;
}

console.log(soma2(), soma2(5), soma2(4, 3), soma2(0, 0, 0))

// atualmente

function soma3(a = 0, b = 0, c = 0) {
    return a + b + c;
}

console.log(soma3(2, 2), soma3(3), soma3(), soma3(3, 3, 0));