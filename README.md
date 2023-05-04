## container
微前端容器，用于注册微应用的。

## parcel-test
提供一个共享的组件。

Parcel 只有在涉及到跨框架的应用之间进行组件调用时，我们才需要考虑parcel的使用。 **Parcel 的定义可以使用任何 single-spa 支持的框架，它也是单独的应用，需要单独启动，但是它不关联路由。** 


## pure-app
一个不基于任何框架的应用。在入口文件中导出`bootstrap`,`mount`,`unmount`钩子即可。

## react-app
一个基于react的微应用。

## tools
用于放置跨应用共享的 JavaScript 逻辑，它也是独立的应用，需要单独构建单独启动。

## vue-app
一个基于vue的微应用。