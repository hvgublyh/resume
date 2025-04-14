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
const markdownFiles = require.context('/public/markdown', true, /\.md$/);

export const getMarkdownFiles = async () => {
  const files: Array<MarkdownFile> = [];
  const promises: Array<Promise<any>> = [];
  // 遍历获取到的文件
  markdownFiles.keys().forEach((filename: string) => {
    const p = new Promise(async (resolve) => {
      const file = await getMarkdownContent(filename);
      const name = filename.replace('./', '').replace('.md', '');
      const content = file;
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

export const getMarkdownContent = async (filename: string) => {
  // 获取markdown文件的内容, 使用fetch请求
  const filePath = markdownFiles(filename);
  const response = await fetch(filePath, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`Failed to fetch markdown file: ${filename}`);
  }
  const content = await response.text();
  return content;
}

// Render markdown content safely
const renderMarkdown = async (content: string) => {
  const html = await marked(content);
  const sanitizedHtml = DOMPurify.sanitize(html);
  return { __html: sanitizedHtml };
};