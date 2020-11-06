import cpfCnpjPromise from '../src/cpf-cnpj-promise'

cpfCnpjPromise('02540779000163')
  .then((res) => {
    console.log(res)
  })
  .catch((e) => {
    console.log(e)
  })