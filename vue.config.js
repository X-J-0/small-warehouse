module.exports = {
    devServer: {
    open:true,
    host:"localhost",
    port:8080,
    proxy: {
    '/api': {
    target: 'http://47.99.181.139:9099',
    changeOrigin: true, 
    pathRewrite: {
    '^/api': ''
    }
    }
   },
 }
}

// module.exports = {
//         // proxy : {
//         //     '/api' : {
//         //         target:'http://47.99.181.139:9099',
//         //         changeOrigin:true,
//         //     },
//         // }
// }