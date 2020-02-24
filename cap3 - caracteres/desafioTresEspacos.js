const texto = 'a   b'

console.log(texto.match(/a   b/))
console.log(texto.match(/a\s\s\sb/))
console.log(texto.match(/a...b/))

// colocar em array
console.log(texto.match(/a|\s\s\s|b/g))
console.log(texto.match(/a|   |b/g))

// no futuro... 
console.log(texto.match(/a\s+b/))
console.log(texto.match(/a\s{3}b/))