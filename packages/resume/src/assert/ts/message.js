import moment from "moment"

const birth = 1996
const graduation = 2019
const currentYear = moment().year()
const currentAge = String(currentYear - birth)
const graduationYear = currentYear - graduation - 1

export default {
  "header": {
    "name": "郑康进",
    "messages": [
      "男",
      currentAge,
      "本科",
      "广东湛江",
      graduationYear + "年经验",
      "18342210255",
      "byzkj@qq.com"
    ]
  },
  "educations": [
    {
      "startTime": "2015.09",
      "endTime": "2019.06",
      "school": "大连理工大学"
    }
  ],
  "skills": [
    "精通Vue，熟悉Vuex、ElementUI、Vant等相关生态。",
    "熟悉React，熟悉React-Router、Redux等相关生态。",
    "熟悉HTML5、CSS3、jQuery、ES6、TS。",
    "熟练使用ECharts数据可视化工具。",
    "熟悉前端工程化，熟悉Webpack打包工具，熟悉Git版本控制工具。",
    "熟悉前端性能优化，熟悉前端安全，熟悉前端跨域问题。",
    "熟悉前端模块化开发，熟悉前端组件化开发。",
    "熟悉前端自动化测试"
  ],
  "experiences": [
    {
      "startTime": "2021.08",
      "endTime": "至今",
      "company": "思特奇",
      "position": "前端工程师",
      "project": [
        {
          "name": "动态表单",
          "tech": [
            "Vue",
            "ElementUI"
          ],
          "introduce": "一款建立于PC端低代码开发平台，可自定义表单，实现填报、审核、再填报、统计等功能。",
          "duty": "全部前端开发工作，完美还原设计图，实现良好的展示效果。"
        },
        {
          "name": "宣传预热",
          "tech": [
            "Vue",
            "ElementUI"
          ],
          "introduce": "一款建立于PC端低代码开发平台，可自定义海报及表单，用于APP端的宣传预热。",
          "duty": "全部前端开发工作，完美还原设计图，实现良好的展示效果。"
        },
        {
          "name": "智慧运营中屏",
          "tech": [
            "Vue",
            "ECharts"
          ],
          "introduce": "大屏项目",
          "duty": "全部前端开发工作，完美还原设计图，实现良好的展示效果。"
        },
        {
          "name": "大奇门户",
          "tech": [
            "jQuery",
            "Layout"
          ],
          "introduce": "公司门户网站",
          "duty": "对门户网站进行样式优化。"
        }
      ]
    },
    {
      "startTime": "2019.08",
      "endTime": "2021.04",
      "company": "金现代信息产业股份有限公司",
      "position": "前端工程师",
      "project": [
        {
          "name": "低代码开发平台",
          "tech": [
            "Vue",
            "ESLint",
            "Axios",
            "Vuex",
            "ElementUI",
            "Vant",
            "Beetl"
          ],
          "introduce": "基于拖拽配置式的高安全性可视化快速开发平台。",
          "duty": "基于需求，小组讨论实现方案，扩展平台功能。"
        },
        {
          "name": "电子档案管理系统",
          "tech": [
            "Layui",
            "jQuery"
          ],
          "introduce": "电子档案管理系统是通过对档案收集、整理等全过程的智能化、信息化管理的系统。",
          "duty": "进行页面布局调整及功能实现。"
        },
        {
          "name": "金企文库",
          "tech": [
            "Vue",
            "ESLint",
            "Axios",
            "Vuex",
            "ElementUI",
            "Vant"
          ],
          "introduce": "金企文库是一款以文档管理为核心的简洁、高效的文档管理系统，拥有网盘式存储与文库式检索。",
          "duty": "进行样式调整，适配不同分辨率，优化交互效果；利用ECharts创建直观、生动、可交互、可个性化定制的数据可视化图表。前后端交互实现文库功能。"
        }
      ]
    }
  ]
}