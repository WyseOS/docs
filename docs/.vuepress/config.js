import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",
  title: "WyseOS",
  description: "WyseOS: The AgentOS for Web Automation",
  theme: defaultTheme({
    logo: "https://wyseos.com/images/logo.svg",
    sidebar: ["/", "API"],
    navbar: ["/API"],
  }),
  bundler: viteBundler(),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "Wyseos",
      // description: "Vue-powered Static Site Generator",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Wyseos",
      //description: "Vue 驱动的静态网站生成器",
    },
  },
});
