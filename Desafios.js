const string = '"Eu só queria" conseguir "pegar as strings" porque elas são "legais"'
const regexString = /\"([^\"]*)\"/g

const form1 = /\"([^\"]*)\"/g

console.log(string.match(form1))


const pegarSoTexto = '<b class="texto"> Esse é o texto que eu quero pegar </b> <b class="texto"> Esse é o texto que eu quero pegar </b>'

const regexSoTexto = /<([^>]*)>/g
const regexSoTexto2 = />([^<]*)</g

console.log(pegarSoTexto.match(regexSoTexto2))

