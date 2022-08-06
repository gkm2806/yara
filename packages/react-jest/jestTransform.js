module.exports = {
  process() {
    return 'module.exports = {};'
  },

  getCacheKey() {
    // the output is always the same
    return 'jestTransform'
  }
}