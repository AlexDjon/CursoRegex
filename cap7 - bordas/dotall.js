const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

const log = reg => console.log(texto.match(reg))

log(/^r.*r$/gi)

log(/^r[\s\S]*r$/gi)