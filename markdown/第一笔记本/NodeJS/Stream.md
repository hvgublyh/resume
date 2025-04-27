---
title: Stream
updated: 2021-07-30T14:45:32
created: 2020-10-26T14:10:22
---

const fs = require('fs');
const zlib = require('zlib');
(function() {
const readStream = fs.createReadStream('./test-2');
const writeStream = fs.createWriteStream('./test-3');
// 监听开始读取
readStream.on('data', function(data) {
});
// 监听读取结束
readStream.on('end', function(data) {
});
// 监听读取出错
readStream.on('err', function(data) {
});
// 监听读取结束
readStream.on('finish', function(data) {
readStream.close();
});
// 管道读取操作
readStream.pipe(writeStream);
// 链式流压缩文件
readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('./test-2.gz'));
// 链式流解压文件
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input.txt'));
})();
