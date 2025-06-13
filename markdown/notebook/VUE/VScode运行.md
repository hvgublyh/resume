---
title: VScode运行
updated: 2021-11-05T10:50:38
created: 2019-11-01T08:23:07
---

VScode运行
2019年11月1日
8:23

1.打开项目
2.打开控制台,输入npm run dev
注意:打包项目,输入npm build dev ,获得dist文件夹

**vscode debug**
1.  **debugger for chrome**
    1.  **attach**
**launch.json:**{

"type": "chrome",

"request": "attach",

"name": "Attach to Chrome",

"port": 9222,

"webRoot": "\${workspaceRoot}/src",

"url": "<http://localhost:8088/#/>",

"sourceMaps": true,

"sourceMapPathOverrides": {

"webpack:///src/\*": "\${webRoot}/\*"

}

}

**chrome快捷方式-属性-目标** :"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222

**注意:需要先启动项目后启动chrome**

