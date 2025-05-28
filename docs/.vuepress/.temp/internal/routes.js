export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/API.html", { loader: () => import(/* webpackChunkName: "API.html" */"/Users/lindawu/Documents/wyse/docs/docs/.vuepress/.temp/pages/API.html.js"), meta: {"title":"API"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lindawu/Documents/wyse/docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"WyseOS: The AgentOS for Web Automation"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"/Users/lindawu/Documents/wyse/docs/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"WyseOS：面向 web 自动化的 AgentOS"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/lindawu/Documents/wyse/docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/zh/API.html", { loader: () => import(/* webpackChunkName: "zh_API.html" */"/Users/lindawu/Documents/wyse/docs/docs/.vuepress/.temp/pages/zh/API.html.js"), meta: {"title":"API"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
