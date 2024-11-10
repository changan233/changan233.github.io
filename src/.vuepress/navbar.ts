import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/newbee/",
  {
    text: "玩家手册",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "加入服务器群聊",
    icon: "book",
    link: "https://qm.qq.com/q/97T8Xbooa4",
  },
]);
