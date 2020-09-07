const fs = require("fs")

const read = (caminhoRelativo) =>
  fs.readFileSync(`${__dirname}/originais/${caminhoRelativo}`, {
    encoding: "utf-8",
  })

const write = (caminhoRelativo, conteudo) => {
  const dirname = `${__dirname}/alterados`

  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)
  }

  fs.writeFileSync(`${dirname}/${caminhoRelativo}`, conteudo, {
    encoding: "utf-8",
  })
}

module.exports = {
  read,
  write
}