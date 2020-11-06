'use strict'

import fetch from 'node-fetch'
import ServiceError from '../errors/service.js'

const receitaWsProvider = async (cnpj) => {
  // Consult CNPJ at ReceitaWS
  const url = `https://www.receitaws.com.br/v1/cnpj/${encodeURI(cnpj)}`
  const options = {
    method: 'GET',
  }

  return await fetch(url, options)
    .then(parseResponse)
    .then(extractValuesData)
    .catch(throwApplicationError)
}

const parseResponse = (res) => {
  if (res.ok === false || res.status !== 200) {
    throw new Error('CNPJ não encontrado na base de dados da Receita WS.')
  }

  return res.json()
}

const extractValuesData = (res) => {
  const data = {
    name: res.nome,
    fantasy: res.fantasia,
    cep: res.cep,
    state: res.uf,
    city: res.municipio,
    neighborhood: res.bairro,
    street: res.logradouro,
    streetnumber: res.numero,
    complement: res.complemento,
    phone: res.telefone,
    mail: res.email,
    service: 'receitaws'
  }

  return data;
}

const throwApplicationError = (error) => {
  const serviceError = new ServiceError({
    message: error.response.data.message,
    service: 'receitaws'
  })

  throw serviceError
}

export default receitaWsProvider;