const texto = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
const texto2 = 'Lentamente é mente muito lenta.'

const log = (reg, str = texto) => console.log(str.match(reg))

log(/<(\w+)>.*<\/\1>/g)

log(/(lenta)(mente).*\1/gi, texto2)
log(/(lenta)(mente).*\2/gi, texto2)

log(/(?:lenta)(mente).*\1/gi, texto2) // grupo que não captura valor

log(/(lenta)(mente)?/gi, texto2)

console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) // muito bom kkk


// Curiosidade
const texto3 = 'abcdefghijkll'
log(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g, texto3)
