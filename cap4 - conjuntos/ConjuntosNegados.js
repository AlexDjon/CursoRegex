const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g)) // \d pega todos os números e \D ignora todos os números
console.log(texto.match(/[^0-9]/g))
console.log(texto.match(/[^\d!\?\[\s,\.]/g))
console.log(texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@' // Intervalos unicode
console.log(texto2.match(/[^!-/:-@\s]/g))