import receitaWsProvider from './receitaWsProvider'
import siareCpfCnpjProvider from './siareCpfCnpjProvider'

const getAvailableServices = (cpfCnpj) => {
  if (cpfCnpj.length === 11) {
    return {
      siare: siareCpfCnpjProvider
    }
  }

  return {
    receitaws: receitaWsProvider,
    siare: siareCpfCnpjProvider
  }
}

export default getAvailableServices;