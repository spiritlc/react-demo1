
const { override, useBabelRc, fixBabelImports } = require('customize-cra')
module.exports = override(
// //     //do stuff with the webpack config...

    useBabelRc(),
//     fixBabelImports('import', {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: 'css',
//     }),
)