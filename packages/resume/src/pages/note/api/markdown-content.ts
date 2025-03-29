import { marked } from 'marked';
import DOMPurify from 'dompurify';

export interface MarkdownCategory {
  name: string;
  children: Array<MarkdownFile>;
}

export interface MarkdownFile {
  name: string;
  path?: string;
  content?: string;
  renderContent?: { __html: string | TrustedHTML };
}

// 使用 require.context 来获取指定目录下的所有 markdown 文件
const markdownFiles = require.context('../markdown', true, /\.md$/);

export const getMarkdownFiles = async () => {
  const files: Array<MarkdownFile> = [];
  const promises: Array<Promise<any>> = [];
  // 遍历获取到的文件
  markdownFiles.keys().forEach((filename: string) => {
    const p = new Promise(async (resolve) => {
      const file = markdownFiles(filename);
      const name = filename.replace('./', '').replace('.md', '');
      const content = file.default || file;
      const renderContent = await renderMarkdown(content);
      files.push({ name, path: filename, content, renderContent });
      resolve(true);
    });
    promises.push(p);
    return p;
  });
  await Promise.all(promises);
  return files;
};

export const getMarkdownContent = (filename: string) => {
  // 获取markdown文件的内容
  const content = markdownFiles(filename);
  return content;
}

// Render markdown content safely
const renderMarkdown = async (content: string) => {
  const html = await marked(content);
  const sanitizedHtml = DOMPurify.sanitize(html);
  return { __html: sanitizedHtml };
};