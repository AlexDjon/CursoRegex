const texto = '1,2,3,4,5,6,a.b c!d?e'
const esp = () => console.log('--------')

const regexVirgula = /,/
console.log(texto.split(regexVirgula))
esp()
console.log(texto.match(regexVirgula))
esp()

console.log(texto.match(/,/g))
esp()
console.log(texto.match(/A/g))
esp()
console.log(texto.match(/A/gi))
esp()
console.log(texto.match(/2/g))
esp()
console.log(texto.match(/b c!d/))
esp()