/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { name } = require('./package.json')
const { jestConfigBuilder } = require('@yara/react-jest')

module.exports = {
  ...jestConfigBuilder(name)
}
