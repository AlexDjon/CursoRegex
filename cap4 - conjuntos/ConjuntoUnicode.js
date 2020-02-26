const texto ='áéíóú àèìòù âêîôû ç ãõ ü'
console.log(texto.match(/[À-ü]/g))
console.log(texto.match(/[\u00C0-\u00FC]/g)) // número unicode