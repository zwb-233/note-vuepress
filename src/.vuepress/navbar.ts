import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "系统",
    icon: "icon-park:windows",
    link: "/note/os/",
  },
  {
    text: "编程基础",
    icon: "icon-park:source-code",
    children: [
      {
        text: "C",
        icon: "skill-icons:c",
        link: "/note/C/",
      },
      {
        text: "python",
        icon: "skill-icons:python-light",
        link: "/note/python/",
      },
      {
        text: "java",
        icon: "skill-icons:java-light",
        link: "/note/java/",
      },
    ]
  },
  {
    text: "其他笔记",
    icon: "icon-park:notebook",
    children: [
      {
        text: "408笔记",
        icon: "streamline-cyber-color:book-encyclopedia",
        link: "/note/408/",
      },
      {
        text: "机器学习",
        icon: "devicon:pytorch",
        link: "/note/ai/",
      },
      {
        text: "信息安全",
        icon: "marketeq:secured-file-folder-2",
        link: "/note/cryptography/",
      },
      {
        text: "算法设计",
        icon: "streamline-color:desktop-code-flat",
        link: "/note/算法设计/",
      },
    ]
  },
  {
    text: "前端",
    icon: "icon-park:web-page",
    children: [
      {
        text: "原生H5",
        children: [
          {
            text: "HTML5",
            icon: "skill-icons:html",
            link: "/note/html5/",
          },
        ],
      },
      {
        text: "框架",
        children: [
          {
            text: "flutter",
            icon: "skill-icons:flutter-light",
            link: "/note/flutter/",
          },
          {
            text: "node.js",
            icon: "logos:nodejs-icon-alt",
            link: "/note/node_js/",
          },
        ],
      },
    ]
  },
  {
    text: "服务器端",
    icon: "icon-park:server",
    children: [
      {
        text: "JAVA",
        children: [
          {
            text: "java",
            icon: "skill-icons:java-light",
            link: "/note/java/",
          },
          {
            text: "ssm",
            icon: "skill-icons:spring-light",
            link: "/note/ssm/",
          },
        ],
      },
      {
        text: "其他工具",
        children: [
          {
            text: "数据库",
            icon: "skill-icons:mysql-light",
            link: "/note/database/",
          },
        ],
      },
    ]
  },
  {
    text: "常用技能",
    icon: "icon-park:text-message",
    link: "/note/skill/",
  },
  // {
  //   text: "V2 文档",
  //   // icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
