import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import groovy from "./lang/groovy.tmLanguage.json"

export default hopeTheme({
    hostname: "https://zwb233.github.io/note-vuepress",

    author: {
        name: "12a",
        url: "/note-vuepress/intro.html",
    },

    logo: "/logo.png",

    favicon: "/logo.png",

    repo: "zwb-233/note-vuepress",

    docsDir: "src",

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,

    // 页脚
    footer: "默认页脚",
    displayFooter: true,

    // 博客相关
    blog: {
        description: "一个开发者",
        intro: "/intro.html",
        // medias: {
        // },
    },

    // 加密配置
    // encrypt: {
    //   config: {
    //     "/demo/encrypt.html": ["1234"],
    //   },
    // },

    // 多语言配置
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,
    markdown: {
        align: true,
        attrs: true,
        codeTabs: true,
        tabs: true,
        component: true,

        figure: true,
        imgLazyload: true,
        imgSize: true,

        math: {
            // 启用前安装 katex
            type: "katex",
            // 或者安装 mathjax-full
            // type: "mathjax",
        },
        demo: true,
        include: true,
        mark: true,
        // plantuml: true,
        spoiler: true,
        // stylize: [
        //   {
        //     matcher: "Recommended",
        //     replacer: ({ tag }) => {
        //       if (tag === "em")
        //         return {
        //           tag: "Badge",
        //           attrs: { type: "tip" },
        //           content: "Recommended",
        //         };
        //     },
        //   },
        // ],
        sub: true,
        sup: true,
        tasklist: true,
        // vPre: true,

        // 在启用之前安装 chart.js
        // chart: true,

        // insert component easily

        // 在启用之前安装 echarts
        echarts: true,

        // 在启用之前安装 flowchart.ts
        // flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // 在启用之前安装 mermaid
        mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        highlighter: {
            type: "shiki",
            notationDiff: true,
            collapsedLines: false,
            notationFocus: true,
            notationHighlight: true,
            // whitespace: true,
            langs: ["shell", "cmake", "java", "javascript", "css", "scss", "sass", "vue", "sql", "c++", "c", "py",
              "dart", "go", "properties", "bat", "makefile", "docker", "html", "xml", "nginx", "yaml", "apache",
              "dotenv", "json", "kotlin", "markdown", "http", "mermaid", "ssh-config", "ts", "jsonc", groovy],
        },

        // 在启用之前安装 @vue/repl
        // vuePlayground: true,

        // install sandpack-vue3 before enabling it
        // sandpack: true,
    },

    // 在这里配置主题提供的插件
    plugins: {
        blog: true,
        icon: {
            assets: "iconify",
        },

        // 启用之前需安装 @waline/client
        // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
        // comment: {
        //   provider: "Waline",
        //   serverURL: "https://waline-comment.vuejs.press",
        // },

        git: process.env.NODE_ENV !== 'development',

        components: {
            components: ["Badge", "VPCard"],
        },

        // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cacheImage: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },

        // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
        // revealjs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },
    },
});
