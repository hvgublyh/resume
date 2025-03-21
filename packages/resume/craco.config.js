const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    devServer: {
        port: 8000, // 设置启动端口为 8000
        open: ['/resume'], // 设置启动时自动打开浏览器，并导航至resume页面
    },
}