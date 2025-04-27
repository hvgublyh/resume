const { spawn } = require('node:child_process');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入依赖: ', (name) => {
  // console.log(`${name}安装中...`);
  const npmInstall = spawn('pnpm.cmd', ['i', '--save', `${name}`], { stdio: 'inherit' });
  npmInstall.on('close', () => {
    // console.log(`npm install 进程退出，代码: ${code}`);
  });
});
