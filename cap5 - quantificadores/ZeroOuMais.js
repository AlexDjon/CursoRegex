const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> Um ou mais

const regex1 = /fogo*/gi // * Verifica o caracter anterior e os próximos, pegando zero Ou Mais
console.log(texto1.match(regex1))
console.log(texto2.match(regex1))