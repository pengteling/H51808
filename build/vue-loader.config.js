//const docLoader = require.resolve("./docs-loader")
module.exports = (isDev) => {
  return {
    preserveWhitespace: false,
    // cssModules:{
    //   localIndentName: isDev
    //     ?"[path]-[name]-[hash:base64:5]"
    //     :"[hash:base64:5]",
    //   camelCase:true
    // }
    // loaders: {
    //   docs: docLoader
    // },
  }
  
}