const telefones = `
Lista telefônica:
  (11) 98756-1212
  98765-4321
  (45) 99803-1093
  (34) 99201-4561
  99132-1455

Inválidos
  1232-21311
  (234) 12312-987
  (34) 1234-12344
`

const log = reg => console.log(telefones.match(reg))

const regex = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g

log(regex)

