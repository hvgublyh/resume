const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    devServer: {
        port: 8000, // 设置启动端口为 8000
    },
}