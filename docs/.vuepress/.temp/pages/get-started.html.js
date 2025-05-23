import comp from "/Users/lindawu/Documents/wyse/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"WyseOS: The AgentOS for Web Automation\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]},{\"level\":2,\"title\":\"Goals\",\"slug\":\"goals\",\"link\":\"#goals\",\"children\":[{\"level\":3,\"title\":\"Key Components\",\"slug\":\"key-components\",\"link\":\"#key-components\",\"children\":[]},{\"level\":3,\"title\":\"Comparative Analysis of Key AgentOS Platforms\",\"slug\":\"comparative-analysis-of-key-agentos-platforms\",\"link\":\"#comparative-analysis-of-key-agentos-platforms\",\"children\":[]},{\"level\":3,\"title\":\"Future Directions for WyseOS\",\"slug\":\"future-directions-for-wyseos\",\"link\":\"#future-directions-for-wyseos\",\"children\":[]},{\"level\":3,\"title\":\"结论\",\"slug\":\"结论\",\"link\":\"#结论\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
