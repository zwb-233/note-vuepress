import {defineUserConfig} from "vuepress";

import theme from "./theme.js";
import { slugify } from "./util/slugify.js"

export default defineUserConfig({
    base: "/note-vuepress/",

    lang: "zh-CN",
    title: "博客",
    description: "笔记博客",

    theme,

    port: 8088,

    markdown: {
        slugify,
    },

    // 和 PWA 一起启用
    // shouldPrefetch: false,

    head: [
        ["link", {rel: "preconnect", href: "https://fonts.googleapis.com"}],
        ["link", {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""}],
        // JetBrain mono 字体 和 Noto Sans字体
        ["link", {
            href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Sans+SC:wght@100..900&display=swap",
            rel: "stylesheet"
        }],
    ],

    extendsPage(page) {
        // 使用本地时间作为文件更新时间
        if (page.frontmatter.LastEditTime) {
            const rawEditTime = page.frontmatter.LastEditTime as string | Date;
            let lastEditTime = new Date(rawEditTime)
            let createTime = new Date(page.frontmatter.date)
            // page.date = new Date(createTime.valueOf() - 360000 * 8)
            page.data.git = {
                createdTime: createTime.getTime(),
                updatedTime: lastEditTime.getTime(),
                contributors: [
                    {
                        name: 'John',
                    }
                ]
            }
        }
    },
});
