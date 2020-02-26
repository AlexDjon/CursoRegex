// no inicio... 
// Um byte (8 bits) - 256 caracteres
// Simbolos, Pontuações, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Simbolos, +Pontuação, A-Z, a-z, 0-9


// Unicode
// Quantidade de Bytes Variavel - Expansível
// Suporta mais de 1 Milhão de caracteres
// Atualmente tem mais de 100.000 caractérires 

// https://unicode-table.com/pt/

const texto = 'aʬc௵d'
console.log(texto.match(/\u02ac|\u0bf5/g))
