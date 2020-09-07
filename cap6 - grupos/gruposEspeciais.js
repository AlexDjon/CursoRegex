const texto = 'João é calmo, mas no transito fica nervoso.'
const texto2 = '<div class="seila-cara">Abla abla</div><div class="teste sim">Kill Kill</div><p>Seila seila seila seila</p> <a>sadsadas</a> <de10> sadjkasjkdasjkd </de10>'

const log = (reg, str = texto) => console.log(str.match(reg))

log(/[\wÀ-ú]+/gi)

// Positive lookahead
log(/[\wÀ-ú]+(?=,)/gi)
log(/[\wÀ-ú]+(?=\.)/gi)
log(/[\wÀ-ú]+(?=, mas)/gi)

// Negative lookahead
log(/[\wÀ-ú]+[\s|\.](?!,)/gi)


// pegando entre divs
log(/(?<=<(\w+)\s?(\w+=\".+?\")?>).+?(?=<\/\1>)/gi, texto2)
