const texto = `
Leo é muito legal
Emanuel foi jogar em sergipe
Bianca é casada com habib
`

const log = reg => console.log(texto.match(reg))

log(/\n/g)
log(/^(\w).+\1$/g) // não funciona
log(/^(\w).+\1$/gim) // funciona - multine