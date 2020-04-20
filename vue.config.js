module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://192.168.3.72:5000',
                changOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
