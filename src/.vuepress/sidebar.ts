import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "笔记",
      icon: "bookmark",
      link: "note/",
      prefix: "note/",
      children: "structure",
    },
    "intro",
  ],
});
