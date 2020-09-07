const texto = 'supermercado hipermercado mimimercado mercado'

const log = reg => console.log(texto.match(reg))

log(/(super|hiper|mini)?mercado/g)
log(/((hi|su)per|mini)?mercado/g)