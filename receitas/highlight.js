const aplicarCor = (txt, reg, cor) =>
  txt.replace(reg, `<span style="color: #${cor};"><b>$1</b></span>`)


const files = require('./files')

const texto = files.read('codigoFonte.html')

const codeRegex = /(?<=<code>)[\s\S]*(?=<\/code>)/i

let codigo = texto.match(codeRegex)[0]


// Strings
codigo = aplicarCor(codigo, /(\".*\")/g, '5d6796')

// Numeros
codigo = aplicarCor(codigo, /(\b[\d\.]+\b)/g, '3ade76')

// Palavras reservadas
codigo = aplicarCor(codigo, /\b(function|if|else|return)\b/g, '6e4296')

// tipos
codigo = aplicarCor(codigo, /\b(let|const)\b/g, '429669')

// comentarios multiplos
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '6b6b6b')

// comentarios single
codigo = aplicarCor(codigo, /(\/\/[\s\S]*?\n)/g, '6b6b6b')

// função
codigo = aplicarCor(codigo, /([\w\d]+(?=\([\s\S]*\)))/g, 'e39b49')


const conteudoFinal = texto.replace(codeRegex, codigo)

files.write('codigoFonte.html', conteudoFinal)