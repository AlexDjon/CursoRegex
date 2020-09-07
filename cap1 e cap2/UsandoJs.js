const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RexExp...')
console.log(regexNove.test(texto))  // Verifica se um texto possui tal regex
console.log(regexNove.exec(texto)) // Executa o regex apontando para determinado texto

const regexLetras = /[a-f]/g
console.log('Métodos da String...')
console.log(texto.match(regexLetras)) // Procura utilizando regex
console.log(texto.search(regexLetras)) // Retorna o primeiro indice de onde foi encontrado
console.log(texto.replace(regexLetras, 'Achei')) // Altera um texto usando regex
console.log(texto.split(regexLetras)) // Quebra um texto usando regex