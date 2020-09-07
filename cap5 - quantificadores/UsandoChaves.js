const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir um quantificador usa {}
const regex = /\d{1,2}/g
const regex2 = /[0-9]{2}/g
const regex3 = /\d{1,}/g

console.log(texto.match(regex))
console.log(texto.match(regex2))
console.log(texto.match(regex3))

const regex4 = /\w{7}/g
const regex5 = /[\wõ]{7,}/g

console.log(texto.match(regex4))
console.log(texto.match(regex5))

// no futuro
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))