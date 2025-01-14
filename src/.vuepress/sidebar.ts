import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "笔记",
      icon: "material-symbols:book-2-rounded",
      link: "note/",
      prefix: "note/",
      children: "structure",
    },
  ],
});
