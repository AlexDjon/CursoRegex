const texto = 'infeliz1 ultrafeliz2 megafeliz3'

const log = reg => console.log(texto.match(reg))

log(/(?<!in)feliz\d/g)