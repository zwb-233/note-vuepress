import {defineUserConfig} from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/note-vuepress/",

    lang: "zh-CN",
    title: "博客演示",
    description: "vuepress-theme-hope 的博客演示",

    theme,

    port: 8088,

    // 和 PWA 一起启用
    // shouldPrefetch: false,

    head: [
        ["link", {rel: "preconnect", href: "https://fonts.googleapis.com"}],
        ["link", {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""}],
        // JetBrain mono 字体
        ["link", {
            href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
            rel: "stylesheet"
        }],
    ]
});
