import ProjectData from "./projectType";
const projects: ProjectData[] = [
  {
    id: '1',
    name: '个人简历网站',
    repoUrl: 'https://github.com/hvgublyh/resume/tree/monorepo',
    demoUrl: 'https://hvgublyh.github.io/resume/',
    description: '使用React、TypeScript和Ant Design构建的响应式个人简历网站',
    features: [
      '响应式设计',
      '使用React Router实现单页面应用',
      '使用Ant Design组件库',
      '使用TypeScript进行类型检查',
    ],
    achievements: [
      '实现了个人简历的在线展示',
      '支持多种设备和屏幕尺寸',
      '使用GitHub Pages进行部署',
      '使用GitHub Actions进行自动化部署',
    ]
  },
];

export default projects