const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> Um ou mais

const regex1 = /fogo+/gi // + Verifica o caracter anterior se tem 1 ou mais do mesmo
console.log(texto1.match(regex1))
console.log(texto2.match(regex1))

const texto3 = "Os Números: 0123456789."
console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g))