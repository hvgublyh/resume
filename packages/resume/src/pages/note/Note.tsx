import React, { useState, useEffect } from 'react';
import styles from './css/Note.module.scss';
import { getMarkdownFiles, MarkdownFile, MarkdownCategory } from './api/markdown-content';


const colors = ['#006168', '#b82987', '#055098', '#982d2d', '#2a7931', '#44655b', '#077456', '#810fa9'];
const Note: React.FC = () => {
  const [markdownFiles, setMarkdownFiles] = useState<MarkdownCategory[]>([]);
  const [selectedFile, setSelectedFile] = useState<MarkdownFile | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<MarkdownCategory | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const selecteCategory = (category: MarkdownCategory) => {
    setSelectedCategory(category);
    setSelectedFile(category.children[0]);
    setActiveIndex(markdownFiles.findIndex((item) => item.name === category.name));
  }

  // Function to fetch all markdown files
  useEffect(() => {
    const fetchMarkdownFiles = async () => {
      try {
        // In a real app, you would make an API call to your backend
        // to get the list of markdown files
        const files = await getMarkdownFiles();
        // filename be like 笔记本/方法汇总/常用技巧.md
        // Sort the files by name
        const fileMap = new Map<string, MarkdownCategory>()
        files.forEach((file) => {
          const path = file.name.split('/');
          const filename = path[path.length - 1].replace('.md', '');
          const category = path[1]
          const newFile = { ...file, name: filename };
          const categoryData = fileMap.get(category);
          if (categoryData) {
            categoryData.children.push(newFile);
          } else {
            fileMap.set(category, { name: category, children: [newFile] });
          }
        });
        const fileStruct: Array<MarkdownCategory> = Array.from(fileMap.values())
        setMarkdownFiles(fileStruct.slice(0, 8)); // 只取前5个分类
        // 默认选中第一个分类和第一个文件
        if (fileStruct.length > 0) {
          setSelectedCategory(fileStruct[0]);
          if (fileStruct[0].children.length > 0) {
            setSelectedFile(fileStruct[0].children[0]);
          }
        }
      } catch (err) {
        console.error('Error fetching markdown files:', err);
        setError('Failed to load markdown files. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdownFiles();
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
                key={category.name}
                className={"category-item  " + (selectedCategory?.name === category.name ? 'active' : '')}
                style={{ 'backgroundColor': colors[index % colors.length] }}
                onClick={() => selecteCategory(category)}
              >
                {category.name}
              </li>
            ))}
          </ul>
          <div className="category-list-bar" style={{ 'backgroundColor': colors[activeIndex % colors.length] }}></div>
        </div>
        <div className="content-container">
          <div className="content">
            {loading && <div>Loading content...</div>}

            {error && <div className="error">{error}</div>}

            {selectedFile && selectedFile.renderContent && !loading && (
              <div
                className={styles.markdownContainer}
                dangerouslySetInnerHTML={selectedFile.renderContent}
              />
            )}

            {!selectedFile && !loading && (
              <div className="no-selection">Select a markdown file to view its content</div>
            )}
          </div>
          {/* 文件列表 */}
          <ul className='file-list'>
            {selectedCategory?.children.map((file) => (
              <li
                key={file.name}
                className={'file-item ' + (selectedFile?.name === file.name ? 'active' : '')}
                onClick={() => setSelectedFile(file)}
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
