const texto = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

const log = (reg, str = texto) => console.log(str.match(reg))

log(/\bdia\w*/gi)
log(/\w+dia\b/gi)

// borda é não \w, que é [^A-Za-z0-9]... temos problemas com os acentos!

const textoAcento
 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

log(/\bdia\b/gi, textoAcento)
log(/(\S*)?dia(\S*)?/gi, textoAcento) // a vírgula entra
log(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi, textoAcento) // acentuação