function buildJestConfig(name){
  return({
    displayName: name,
    name,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.svg$": "@yara/react-jest/jestTransform.js",
      "^.+\\.css$": "@yara/react-jest/jestTransform.js"
   },
  })
}

module.exports = buildJestConfig