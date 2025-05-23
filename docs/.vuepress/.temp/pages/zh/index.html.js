import comp from "/Users/lindawu/Documents/wyse/vuepress-starter/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"WyseOS：面向 web 自动化的 AgentOS\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"简介\",\"slug\":\"简介\",\"link\":\"#简介\",\"children\":[]},{\"level\":2,\"title\":\"目标\",\"slug\":\"目标\",\"link\":\"#目标\",\"children\":[{\"level\":3,\"title\":\"主要组成部分\",\"slug\":\"主要组成部分\",\"link\":\"#主要组成部分\",\"children\":[]},{\"level\":3,\"title\":\"对比分析\",\"slug\":\"对比分析\",\"link\":\"#对比分析\",\"children\":[]},{\"level\":3,\"title\":\"WyseOS 的未来发展方向\",\"slug\":\"wyseos-的未来发展方向\",\"link\":\"#wyseos-的未来发展方向\",\"children\":[]},{\"level\":3,\"title\":\"结论\",\"slug\":\"结论\",\"link\":\"#结论\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"zh/index.md\"}")
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
