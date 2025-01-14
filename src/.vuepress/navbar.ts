import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "408笔记",
    // icon: "book",
    link: "/note/408/",
  },
  {
    text: "机器学习",
    icon: "devicon:pytorch",
    link: "/note/ai/",
  },
  {
    text: "C",
    icon: "skill-icons:c",
    link: "/note/C/",
  },
  {
    text: "信息安全",
    // icon: "book",
    link: "/note/cryptography/",
  },
  {
    text: "python",
    icon: "skill-icons:python-light",
    link: "/note/python/",
  },
  {
    text: "算法设计",
    // icon: "book",
    link: "/note/算法设计/",
  },
  {
    text: "系统",
    icon: "skill-icons:windows-light",
    link: "/note/os/",
  },
  {
    text: "前端",
    // icon: "material-symbols:web-asset",
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
    // icon: "book",
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
            link: "/note/sql/",
          },
        ],
      },
    ]
  },
  {
    text: "常用技能",
    // icon: "book",
    link: "/note/skill/",
  },
  {
    text: "V2 文档",
    // icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
