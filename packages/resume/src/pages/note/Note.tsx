import { useEffect, useState } from 'react';

import { getMarkdownContent, getMarkdownFiles, MarkdownCategory, MarkdownFile, renderMarkdown } from './api/markdown-content';
import styles from './css/Note.module.scss';

const categoryMaxNumber = 8
const colors = ['#006168', '#b82987', '#055098', '#982d2d', '#2a7931', '#44655b', '#077456', '#810fa9'];
function Note() {
  const [markdownFiles, setMarkdownFiles] = useState<MarkdownCategory[]>([]);
  const [selectedFile, setSelectedFile] = useState<MarkdownFile | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<MarkdownCategory | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const selecteCategory = (category: MarkdownCategory) => {
    setSelectedCategory(category);
    selectFile(category.children[0]);
    setActiveIndex(markdownFiles.findIndex((item) => item.name === category.name));
  }
  const selectFile = (file: MarkdownFile) => {
    setSelectedFile(file);
    if (file.content) {
      // 如果文件已经加载过了，就不需要再加载了
      return;
    }
    if (!file.path) return;
    // Fetch the content of the selected file
    void getMarkdownContent(file.path).then(async (content) => {
      file.content = content;
      file.renderContent = await renderMarkdown(content);
      setSelectedFile({ ...file });
    }).catch(() => {
      setError('Failed to load markdown content. Please try again later.');
    });
  }
  const fetchMarkdownFiles = async () => {
    try {
      // In a real app, you would make an API call to your backend
      // to get the list of markdown files
      const files = await getMarkdownFiles();
      // filename be like 笔记本/方法汇总/常用技巧.md
      // Sort the files by name
      setMarkdownFiles(files.slice(0, categoryMaxNumber)); // 只取前5个分类
      // 默认选中第一个分类和第一个文件
      if (files.length > 0) {
        selecteCategory(files[0]);
        if (files[0].children.length > 0) {
          setSelectedFile(files[0].children[0]);
        }
      }
    } catch (error_) {
      console.error('Error fetching markdown files:', error_);
      setError('Failed to load markdown files. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch all markdown files
  useEffect(() => {
    void fetchMarkdownFiles();
  }, []);

  if (loading && markdownFiles.length === 0) {
    return <div>Loading markdown files...</div>;
  }

  if (error && markdownFiles.length === 0) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className={"note-container " + styles.Note}>
      <div className="sidebar">
        {/* 分类列表 */}
        <div className="category-list-container">
          <ul className='category-list'>
            {markdownFiles.map((category, index) => (
              <li
                className={"category-item  " + (selectedCategory?.name === category.name ? 'active' : '')}
                key={category.name}
                onClick={() => { selecteCategory(category); }}
                style={{ 'backgroundColor': colors[index % colors.length] }}
              >
                {category.name}
              </li>
            ))}
          </ul>
          <div className="category-list-bar" style={{ 'backgroundColor': colors[activeIndex % colors.length] }} />
        </div>
        <div className="content-container">
          <div className="content">
            {loading ? <div>Loading content...</div> : undefined}

            {error ? <div className="error">{error}</div> : undefined}

            {selectedFile?.renderContent && !loading ? <div
              className={styles.markdownContainer}
              dangerouslySetInnerHTML={selectedFile.renderContent}
            /> : undefined}

            {!selectedFile && !loading && (
              <div className="no-selection">Select a markdown file to view its content</div>
            )}
          </div>
          {/* 文件列表 */}
          <ul className='file-list'>
            {selectedCategory?.children.map((file) => (
              <li
                className={'file-item ' + (selectedFile?.name === file.name ? 'active' : '')}
                key={file.name}
                onClick={() => { selectFile(file); }}
              >
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Note;
