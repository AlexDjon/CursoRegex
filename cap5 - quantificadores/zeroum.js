const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional)

const regex1 = /fogo?/gi // ? Verifica o caracter anterior
console.log(texto1.match(regex1))
console.log(texto2.match(regex1))