import { CodeTabs } from "/Users/lindawu/Documents/wyse/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuepress+b_3l7pb5t25qf7y4jjwce5ymuo6m/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/lindawu/Documents/wyse/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuepress+b_3l7pb5t25qf7y4jjwce5ymuo6m/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/lindawu/Documents/wyse/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuepress+b_3l7pb5t25qf7y4jjwce5ymuo6m/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
