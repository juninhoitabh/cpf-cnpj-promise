'use strict'

import CpfCnpjPromiseError from './errors/cpf-cnpj-promise';
import getAvailableServices from './services/';
import validatorCpfCnpj from './utils/validatorCpfCnpj';
import Promise from './utils/promise-any';

const CPF_SIZE = 11;
const CNPJ_SIZE = 14;

export default async function (cpfCnpjValue, configurations = {}) {
  return await Promise.resolve(cpfCnpjValue)
    .then(validateInputType)
    .then(cpfCnpjValue => {
      configurations.providers = configurations.providers ? configurations.providers : []
      validateProviders(configurations.providers)

      return cpfCnpjValue
    })
    .then(removeSpecialCharacters)
    .then(validateInputLength)
    .then((cpfCnpjValue) => {
      return fetchCpfCnpjFromServices(cpfCnpjValue, configurations)
    })
    .catch(handleServicesError)
    .catch(throwApplicationError)
}

const validateProviders = (providers) => {
  let availableProviders = ['receitaws', 'siare']

  if (!Array.isArray(providers)) {
    throw new CpfCnpjPromiseError({
      message: 'Erro ao inicializar a instância do CPFCNPJPromise.',
      type: 'validation_error',
      errors: [
        {
          message:
            `O parâmetro providers deve ser uma lista.`,
          service: 'providers_validation'
        }
      ]
    })
  }

  for (const provider of providers) {
    if (!availableProviders.includes(provider)) {
      throw new CpfCnpjPromiseError({
        message: 'Erro ao inicializar a instância do CPFCNPJPromise.',
        type: 'validation_error',
        errors: [
          {
            message:
              `O provider "${provider}" é inválido. Os providers disponíveis são: ["${availableProviders.join('", "')}"].`,
            service: 'providers_validation'
          }
        ]
      })
    }

    return provider
  }
}

const validateInputType = (cpfCnpjValue) => {
  const cpfCnpjTypeOf = typeof cpfCnpjValue

  if (cpfCnpjTypeOf === 'number' || cpfCnpjTypeOf === 'string') {
    return cpfCnpjValue
  }

  throw new CpfCnpjPromiseError({
    message: 'Erro ao inicializar a instância do CPFCNPJPromise.',
    type: 'validation_error',
    errors: [
      {
        message:
          'Você deve chamar o construtor utilizando uma String ou um Number.',
        service: 'cpf_cnpj_validation'
      }
    ]
  })
}

const removeSpecialCharacters = (cpfCnpjValue) => {
  // Clear the CPF/CNPJ to contain only numbers, removing dashes and periods
  return cpfCnpjValue.toString().replace(/\D/g, '')
}

function validateInputLength(cpfCnpjValue) {
  let tp = null;
  let tpSize = null;
  if (cpfCnpjValue.length === CPF_SIZE) {
    tp = 'CPF'
    tpSize = CPF_SIZE
  } else if (cpfCnpjValue.length === CNPJ_SIZE) {
    tp = 'CNPJ'
    tpSize = CNPJ_SIZE
  } else {
    tp = 'CPF/CNPJ'
    tpSize = `${CPF_SIZE} caracteres para CPF e ${CNPJ_SIZE} para CNPJ`
  }

  if (cpfCnpjValue.length === CPF_SIZE || cpfCnpjValue.length === CNPJ_SIZE) {
    if (!validatorCpfCnpj(cpfCnpjValue)) {
      throw new CpfCnpjPromiseError({
        message: `${tp} Inválido!`,
        type: 'validation_error',
        errors: [
          {
            message: `${tp} Inválido!`,
            service: 'cpf_cnpj_validation'
          }
        ]
      })
    }

    return cpfCnpjValue
  }

  throw new CpfCnpjPromiseError({
    message: `${tp} deve conter ${tpSize}!`,
    type: 'validation_error',
    errors: [
      {
        message: `${tp} informado possui quantidade de caracteres inválido!`,
        service: 'cpf_cnpj_validation'
      }
    ]
  })
}

const fetchCpfCnpjFromServices = (cpfCnpjValue, configurations) => {
  let providersServices = getAvailableServices(cpfCnpjValue)

  if (configurations.providers.length === 0) {
    return Promise.any(
      Object.values(providersServices).map(provider => provider(cpfCnpjValue))
    )
  }

  return Promise.any(
    configurations.providers.map(provider => {
      return providersServices[provider](cpfCnpjValue)
    })
  )
}

const handleServicesError = (aggregatedErrors) => {
  if (aggregatedErrors.length !== undefined) {
    throw new CpfCnpjPromiseError({
      message: 'Todos os serviços de consulta retornaram erro.',
      type: 'service_error',
      errors: aggregatedErrors
    })
  }
  throw aggregatedErrors
}

const throwApplicationError = ({ message, type, errors }) => {
  throw new CpfCnpjPromiseError({ message, type, errors })
}