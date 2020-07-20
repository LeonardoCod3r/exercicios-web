const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}

//ela carrega o contexto em que ela foi escrita

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec();