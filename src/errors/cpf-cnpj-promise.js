class CpfCnpjPromiseError extends Error {
  constructor({ message, type, errors } = {}) {
    super()

    this.name = 'CpfCnpjPromiseError'
    this.message = message
    this.type = type
    this.errors = errors
  }
}

export default CpfCnpjPromiseError
