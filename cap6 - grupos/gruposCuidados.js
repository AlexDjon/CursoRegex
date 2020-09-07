const texto = 'Pedrinho (filho de Pedro Silva) é doutor do ABC!'

const log = reg => console.log(texto.match(reg))

log(/[(abc)]/gi)  // dentro do conjunto o grupo não funciona
log(/([abc])/gi)  // isso funciona
log(/(abc)/gi)  // isso funciona