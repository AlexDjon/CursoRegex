const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

const log = (rg, str=texto) => console.log(str.match(rg))

// quantificadores SÃO gulosos (greedy)...

log(/<div>.+<\/div>/g)
log(/<div>.*<\/div>/g)
log(/<div>.{1,}<\/div>/g)


// quantificadores NÃO gulosos (lazy)...
log(/<div>.+?<\/div>/g)
log(/<div>.*?<\/div>/g)
log(/<div>.{1,}?<\/div>/g)


// teste com aspas
const texto2 = 'Texto "cheio" de "aspas", eu quero "pegar todo o conteúdo" que estiver entre "duas áspas"'

log(/\".+?\"/g, texto2)
