import { registerApplication, start } from "single-spa"
import { constructApplications, constructRoutes } from "single-spa-layout"

// 获取路由配置对象
const routes = constructRoutes(document.querySelector("#single-spa-layout"))
// 获取路由信息数组
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name)
  }
})
// 遍历路由信息注册应用
applications.forEach(registerApplication)

// registerApplication(
//   "@single-spa/welcome",
//   () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
// 精确匹配
//   location => location.pathname === "/"
// )

// registerApplication({
//   name: "@study/pure-app",
//   app: () => System.import("@study/pure-app"),
//   activeWhen: ["/pure-app"]
// })

// registerApplication({
//   name: "@study/react-app",
//   app: () => System.import("@study/react-app"),
//   activeWhen: ["/react-app"]
// })

// registerApplication({
//   name: "@study/vue-app",
//   app: () => System.import("@study/vue-app"),
//   activeWhen: ["/vue-app"]
// })

start({
  urlRerouteOnly: true
})
