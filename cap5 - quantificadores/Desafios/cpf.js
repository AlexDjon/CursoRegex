const todosCpfs = `
Válidos: 
  123.456.789-12
  123.458.789-34
  423.458.643-43
  125.045.019-51

Inválidos:
  12.2134.13-23
  123.3213.2-31
  123.504.120-3
`

const log = reg => console.log(todosCpfs.match(reg))

const regex1 = /\d{3}\.\d{3}\.\d{3}-\d{2}/g
log(regex1)