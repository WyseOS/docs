export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"WyseOS\",\"description\":\"WyseOS: The AgentOS for Web Automation\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Wyseos\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"Wyseos\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
