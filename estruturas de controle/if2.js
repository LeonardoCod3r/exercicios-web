function test1(num) {
    if (num > 7)
        console.log(num)
    console.log("final")
}
test1(8)
test1(6)

function test2(num) {
    if (num > 7); { // não está relacionado com o if
        console.log(num)
    }
}

test2(8)
test2(6)