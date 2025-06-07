const birth = "1996";

const message = {
  educations: [
    {
      endTime: "2019.06",
      school: "大连理工大学",
      startTime: "2015.09",
    },
  ],
  experiences: [
    {
      company: "思特奇",
      endTime: "2025.03",
      position: "前端工程师",
      project: [
        {
          duty: "技术选型及项目框架搭建。\n使用Eslint和husky规范代码和git提交。\n使用Jest进行单元测试。\n使用React和Antd进行项目开发。\n使用Verdaccio搭建私有npm仓库, 统一管理公司内部组件。\n使用monorepo管理多个项目，并进行组件库的开发。",
          introduce:
            "这是一款基于PC端的低代码开发平台，专注于实现高度自定义的预热功能。平台内置丰富的组件库，用户能够通过拖拽操作自由组合组件，快速生成个性化的预热材料。同时，平台提供模板设计、内容分享和数据统计等多项实用功能，帮助用户高效完成预热任务并适应多样化场景。",
          name: "宣传预热",
          tech: ["React", "Antd"],
        },
        {
          duty: "技术选型及项目框架搭建。\n使用Eslint和husky规范代码和git提交。\n使用Vue3.0和Composition API构建项目。\n使用Jest和Vue-test-utils进行单元测试。\n使用Verdaccio搭建私有npm仓库, 统一管理公司内部组件。\n使用monorepo管理多个项目，并进行组件库的开发。",
          introduce:
            "收入统筹项目 是一款企业管理系统，主要用于 企业收入目标的收集、下发、填报与分析，帮助企业高效管理财务数据和运营目标。该项目采用 Vue 作为前端框架，结合 Element UI 组件库和 ECharts 数据可视化，打造流畅的用户体验和强大的数据展示能力。",
          name: "收入统筹",
          tech: ["Vue", "ElementUI"],
        },
        {
          duty: "技术选型及项目框架搭建。\n使用ECharts进行数据可视化。\n使用Jest和Vue-test-utils进行单元测试。",
          introduce:
            "这是一个基于 PC 平台的大屏数据展示项目，采用 Vue 技术栈实现。通过精美的图表和图形展现关键数据，支持多种类型的图表（如折线图、柱状图、饼图等）。支持多种分辨率显示，适用于各种大屏硬件设备。提供便捷的用户交互功能，如数据筛选、缩放和动态调整布局。这个项目将大屏技术与现代前端工具相结合，旨在提供流畅、高效、可扩展的可视化解决方案，满足多样化的业务需求。",
          name: "智慧运营中屏",
          tech: ["Vue", "ECharts"],
        },
        {
          duty: "新功能开发。\n维护项目。\n优化项目。\n解决线上问题。",
          introduce: "包括一些后台管理系统，官网等。",
          name: "其他一些项目",
          tech: ["jQuery", "Lodash", "ECharts", "vue-awesome-swiper"],
        },
      ],
      startTime: "2021.08",
    },
    {
      company: "金现代信息产业股份有限公司",
      endTime: "2021.04",
      position: "前端工程师",
      project: [
        {
          duty: "进行页面布局调整及功能实现。\n利用ECharts创建直观、生动、可交互、可个性化定制的数据可视化图表。\n前后端交互实现平台功能。\n使用Beetl模板引擎进行页面渲染。",
          introduce:
            "轻骑兵低代码开发平台（Hussar LCDP）是金现代公司研发十余年的开发平台产品，使用平台可无需编码或少量编码，通过拖拉拽和简单配置的方式就能快速生成软件系统。该平台具有可视化低代码开发、开发组件丰富、高安全性等特性，全面适配国产化环境。采用轻骑兵低代码开发平台可大大提升软件系统开发速度和质量，降低对软件开发人员的要求和开发成本。",
          name: "低代码开发平台",
          tech: [
            "Vue",
            "ESLint",
            "Axios",
            "Vuex",
            "ElementUI",
            "Vant",
            "Beetl",
          ],
        },
        {
          duty: "进行页面布局调整及功能实现。",
          introduce:
            "电子档案管理系统是通过对档案收集、整理等全过程的智能化、信息化管理的系统。",
          name: "电子档案管理系统",
          tech: ["Layui", "jQuery"],
        },
        {
          duty: "进行页面布局调整及功能实现。\n利用web-uploader实现文件分段上传。",
          introduce:
            "金企文库是一款以文档管理为核心的简洁、高效的文档管理系统，拥有网盘式存储与文库式检索。",
          name: "金企文库",
          tech: ["Vue", "ESLint", "Axios", "Vuex", "ElementUI", "Vant"],
        },
      ],
      startTime: "2019.10",
    },
  ],
  header: {
    messages: [
      "男",
      birth,
      "https://hvgublyh.github.io/resume/",
      "18342210255",
      "byzkj@qq.com",
    ],
    name: "郑康进",
  },
  skills: [
    "擅长 Vue、React 及其生态系统，如 Element UI、Ant Design 组件库，精通 ECharts 可视化库。",
    "熟悉 Nuxt ，能够快速搭建服务端渲染的前端应用。",
    "熟悉 qiankun, 能够快速搭建微前端应用。",
    "熟悉 taro 和 expo managed workflow，能够快速搭建跨平台的移动端应用。",
    "深度掌握 JavaScript 及现代前端技术，包括 ES6+、TypeScript、Webpack、Monorepo 等，并熟悉 低代码开发 领域。",
    "专注前端性能优化、安全性和跨域问题，具备 高效模块化开发 与 组件化设计 能力，能够构建 可扩展、高性能 的前端架构。",
  ],
};

export default message;
