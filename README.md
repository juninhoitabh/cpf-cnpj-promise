## Features

 * Sempre atualizado em tempo-real por se conectar diretamente aos serviços Receita Ws e Siare.
 * Possui alta disponibilidade por usar mais de um serviço como fallback.
 * Sempre retorna a resposta mais rápida por fazer as consultas de forma concorrente.
 * Sem limites de uso (rate limits) conhecidos.
 * Interface de Promise extremamente simples.
 * Suporte ao Node.js `14.x`, `15.x` e `@stable`.
 * 100% de code coverage com testes unitários e E2E.
 * Desenvolvido utilizando ES6.

## Como utilizar

### Realizando uma consulta

Por ser multifornecedor, a biblioteca irá resolver a Promise com o fornecedor que **mais rápido** lhe responder.

``` js
import searchCpfCnpj from 'cpf-cnpj-promise'

searchCpfCnpj('27865757000102')
  .then(console.log)

  // {
  // name: GLOBO COMUNICACAO E PARTICIPACOES S.A.,
  // fantasy: ,
  // cep: 04084000,
  // state: SP,
  // city: SAO PAULO,
  // neighborhood: INDIANOPOL,
  // street: AVENIDA MIRUNA,
  // streetnumber: 168,
  // complement: ,
  // phone: ,
  // mail: ,
  // service: 'receitaws'
  // }
```


### Você também poderá passar o CPF/CNPJ formatado

``` js
import searchCpfCnpj from 'cpf-cnpj-promise'

searchCpfCnpj('27.865.757/0001-02')
  .then(console.log)

  // {
  // name: GLOBO COMUNICACAO E PARTICIPACOES S.A.,
  // fantasy: ,
  // cep: 04084000,
  // state: SP,
  // city: SAO PAULO,
  // neighborhood: INDIANOPOL,
  // street: AVENIDA MIRUNA,
  // streetnumber: 168,
  // complement: ,
  // phone: ,
  // mail: ,
  // }
```

### Quando o CPF/CNPJ não é encontrado

Neste caso será retornado um `"service_error"` e por ser multifornecedor, a biblioteca irá rejeitar a Promise apenas quando tiver a resposta negativa de todos os fornecedores.

``` js
import searchCpfCnpj from 'cpf-cnpj-promise'

searchCpfCnpj('27865757000102')
  .catch(console.log)

  // {
  //     name: 'CpfCnpjPromiseError',
  //     message: 'Todos os serviços de consulta retornaram erro.',
  //     type: 'service_error',
  // }

```

### Quando o CPF/CNPJ possui um formato inválido

Neste caso será retornado um `"validation_error"` e a biblioteca irá rejeitar imediatamente a Promise, sem chegar a consultar nenhum fornecedor.

``` js
import searchCpfCnpj from 'cpf-cnpj-promise'

searchCpfCnpj('27865757000105')
  .catch(console.log)

  // {
  //     name: 'CpfCnpjPromiseError',
  //     message: 'CPF/CNPJ  informado possui quantidade de caracteres inválido',
  //     type: 'validation_error',
  //     errors: [{
  //       message: '11 caracteres para CPF e 14 para CNPJ',
  //       service: 'cpf_cnpj_validation'
  //     }]
  // }
```