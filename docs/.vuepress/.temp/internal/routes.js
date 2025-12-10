export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "v-4ec95bbd" */"/Users/KhulnaSoft/gitexc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"How to use"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "v-cd2467a0" */"/Users/KhulnaSoft/gitexc/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"GitExec Guide"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "v-8fe89ed2" */"/Users/KhulnaSoft/gitexc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
