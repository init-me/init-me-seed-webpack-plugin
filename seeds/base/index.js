const { getHooks } = require('./lib/hooks')
const PLUGIN_NAME = 'iPlugin'

class WebpackPlugin {
  constructor() {
    // TODO:
  }
  static getName() {
    return PLUGIN_NAME
  }
  static getHooks(compilation) {
    return getHooks(compilation)
  }
  apply(/*compiler*/) {
    // const { output, context } = compiler.options
    // compiler.hooks.emit.tap(
    //   PLUGIN_NAME,
    //   (compilation) => {
    //   }
    // )
  }
}

module.exports = WebpackPlugin