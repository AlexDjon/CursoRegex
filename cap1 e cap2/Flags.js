// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'

console.log(texto.match(/C|ab/)) // Pega o C ou ab (só 1 pois não é global)
console.log(texto.match(/c|ab/i)) // Pega o c/C ou ab/aB/Ab/AA
console.log(texto.match(/ab|c/gi)) // Pega todos ab/Ab/AB/aB ou C/c