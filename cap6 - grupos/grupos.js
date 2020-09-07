const texto = 'O José Simão é muito engraçado... hehehehehe'
const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag https://maps.google.com.br'

const log = (reg, str = texto) => console.log(str.match(reg))

log(/(he)+/g)

log(/(http:\/\/|https:\/\/)?([\w\d]{1,10}\.)?([\w\d]{2,20}\.[\w\d]{2,15})(\.[\w\d]{2,10})?/g, texto2)

