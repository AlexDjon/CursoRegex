const emails = `
Válidos:
  franziska4814@ddd1dd2.com
  rona4799@ggg3f33f.com.en
  cel.edonio1549@fg4f.com.br
  yaagoub5533@uorak.com.pt
  donte9178@uorak.com

Inválidos:
  @jkasd23.com
  as1@sadkjasdasdasd
  sadjkasd@sadasd
  123123@gm.
`

const log = reg => console.log(emails.match(reg))

const regex = /[\w\d\.]{5,30}@[\w\d]{2,30}\.\w{2,15}\.?\w{0,15}/g

log(regex)