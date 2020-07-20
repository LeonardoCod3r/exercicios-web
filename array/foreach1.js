const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice /*, array*/ ) { //possui três parâmentros
    console.log(`${indice + 1}) ${nome}`)
        //console.log(array);
})
aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados);