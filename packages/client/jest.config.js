/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { name } = require('./package.json')
const { buildJestConfig } = require('@yara/react-jest')

module.exports = {
  ...buildJestConfig(name)
}
