const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data;
    //console.log(funcionarios)
    const chineses = e => e.pais === 'China';
    const mulheres = e => e.genero === 'F';
    const mulherChinesa = funcionarios.filter(chineses).filter(mulheres).reduce(function(acumulador, atual) {
        return acumulador.salario > atual.salario ? atual : acumulador;
    });
    de
    console.log(mulherChinesa)
});