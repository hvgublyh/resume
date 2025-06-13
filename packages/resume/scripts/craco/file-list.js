const fs = require('node:fs');
const path = require('node:path');
const { DefinePlugin } = require('webpack');

const middlewares = require('./middlewares.js');

const PROJECT_ROOT = path.resolve(__dirname, '../..');
const PUBLIC_PATH = process.env.PUBLIC_PATH || 'public';
const OUTPUT_PATH = process.env.OUTPUT_PATH || '';

const categoryMap = [
  { from: PUBLIC_PATH + '/markdown/notebook', key: '__MARKDOWN_LIST_', to: 'file-list.json' }
];

function getAllFiles(originPath, arrayOfFiles = []) {
  const files = fs.readdirSync(originPath);
  files.sort();

  const directories = [];
  const markdownFiles = [];

  for (const file of files) {
    const fullPath = path.join(originPath, file);
    const lastIndex = -1
    const relativePath = fullPath.replace(PROJECT_ROOT, '').replace(PUBLIC_PATH, '').replace(/\\/g, '/').replace(/^\/\//, '/');
    const name = fullPath.split('\\').slice(lastIndex)[0].replace('.md', '');

    if (fs.statSync(fullPath).isDirectory()) {
      const item = { children: [], name, path: OUTPUT_PATH + relativePath };
      getAllFiles(fullPath, item.children);
      if (item.children.length > 0) {
        directories.push(item);
      }
    } else if (file.endsWith('.md')) {
      markdownFiles.push({ name, path: OUTPUT_PATH + relativePath });
    }
  }

  arrayOfFiles.push(...directories, ...markdownFiles);
  return arrayOfFiles;
}

const generateFileListContent = (item) => {
  const { from } = item;
  const targetDirectory = path.resolve(PROJECT_ROOT, from);
  const allFiles = getAllFiles(targetDirectory);
  return JSON.stringify(allFiles, undefined, 2);
};

const injectFileListRealize = (webpackConfig, item) => {
  const fileListContent = generateFileListContent(item);
  webpackConfig.plugins.push(
    new DefinePlugin({
      [item.key]: JSON.stringify(fileListContent)
    })
  );

  if (process.env.NODE_ENV === 'development') {
    middlewares.useMiddlewares((devServer) => {
      devServer.app.get('/file-list.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(fileListContent);
      });
    });
  } else {
    webpackConfig.plugins.push({
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('GenerateFileList', (compilation) => {
          const outputPath = compilation.outputOptions.path ?? '';
          fs.writeFileSync(
            path.join(outputPath, 'file-list.json'),
            fileListContent
          );
        });
      },
    });
  }
};

const injectFileList = (webpackConfig) => {
  for (const item of categoryMap) {
    injectFileListRealize(webpackConfig, item);
  }
};

const dealMarkdown = (webpackConfig) => {
  const oneOfRule = webpackConfig.module.rules.find((rule) =>
    typeof rule !== 'string' && typeof rule === 'object' && rule !== null && 'oneOf' in rule
  );

  if (oneOfRule && typeof oneOfRule === 'object' && 'oneOf' in oneOfRule && Array.isArray(oneOfRule.oneOf)) {
    oneOfRule.oneOf.unshift({
      test: /\.md$/,
      use: 'raw-loader',
    });
  } else {
    webpackConfig.module.rules.unshift({
      test: /\.md$/,
      use: 'raw-loader',
    });
  }
};

module.exports = {
  categoryMap,
  dealMarkdown,
  injectFileList
};
