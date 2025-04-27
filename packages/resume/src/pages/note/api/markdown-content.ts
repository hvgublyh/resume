import DOMPurify from 'dompurify';
import { marked } from 'marked';

export type MarkdownCategory = {
  children: MarkdownFile[];
  name: string;
}

export type MarkdownFile = {
  content?: string;
  name: string;
  path?: string;
  renderContent?: { __html: string | TrustedHTML };
}

const publicPath = process.env.REACT_APP_API_PUBLIC_PATH ?? '';

export const getMarkdownFiles = async () => {
  let markdownFiles: MarkdownCategory[] = [];
  const response = await fetch(publicPath + "/file-list.json")
  if (response.ok) {
    markdownFiles = await response.json() as MarkdownCategory[];
  } else {
    throw new Error('Failed to fetch file list');
  }
  return markdownFiles;
};

export const getMarkdownContent = async (path: string) => {
  // 获取markdown文件的内容, 使用fetch请求
  const filePath = encodeURI(path);
  const response = await fetch(publicPath + filePath);
  if (!response.ok) {
    throw new Error(`Failed to fetch markdown file: ${path}`);
  }
  const content = await response.text();
  return content;
}

// Render markdown content safely
export const renderMarkdown = async (content: string) => {
  const html = await marked(content);
  const sanitizedHtml = DOMPurify.sanitize(html);
  return { __html: sanitizedHtml };
};