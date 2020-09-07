const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

const log = reg => console.log(texto.match(reg))

log(/r/gi)
log(/^r.+?(?=\s)/gi) // ^  -  Início da linha ou da string
log(/r$/gi) // ^  -  Fim da linha ou da string

log(/^r.*r$/gi) // com problema por causa do \n