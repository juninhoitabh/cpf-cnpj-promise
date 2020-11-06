import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'

const input = 'src/cpf-cnpj-promise.js'
const defaultPlugins = [
  babel({
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false }]]
  })
]

export default [
  {
    input,
    plugins: [].concat(defaultPlugins, [
      commonjs(),
      json()
    ]),
    output: {
      file: 'dist/cpf-cnpj-promise.js',
      format: 'umd',
      name: 'cpfCnpj'
    }
  },
  {
    input,
    plugins: [
      replace({
        'node-fetch': 'unfetch',
      })
    ].concat(defaultPlugins, [
      resolve({
        browser: true
      }),
      commonjs(),
      json()
    ]),
    context: 'window',
    output: {
      file: 'dist/cpf-cnpj-promise-browser.js',
      format: 'umd',
      name: 'cpfCnpj'
    }
  }
]

