// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from "./store"

// 接口过滤器
// import interceptors from "./services/interceptors"
// interceptors(axios);

// 移动端延迟点击bug处理插件
import FastClick from 'fastclick'
FastClick.attach(document.body)

// vux 移动端插件
import {
  ToastPlugin,Toast ,Tabbar, TabbarItem,Group,
  CellBox,Cell,XHeader,ViewBox,Tab,
  TabItem,Swiper,SwiperItem,Badge,
  XInput,XButton,XAddress,XSwitch,
  XTextarea,LoadMore,Flexbox,FlexboxItem,Confirm,
  ConfirmPlugin,Spinner,Selector,PopupPicker,
  PopupRadio,Popup,Radio,PopupHeader,TransferDom,
  XNumber,Search,GroupTitle,InlineLoading,Flow,FlowState,FlowLine
} from 'vux'
Vue.component("toast", Toast)
Vue.component("tabbar", Tabbar)
Vue.component("tabbar-item", TabbarItem)
Vue.component("group", Group)
Vue.component("cell-box", CellBox)
Vue.component("cell", Cell)
Vue.component("x-header", XHeader)
Vue.component("view-box", ViewBox)
Vue.component("tab", Tab)
Vue.component("tab-item", TabItem)
Vue.component("swiper", Swiper)
Vue.component("swiper-item", SwiperItem)
Vue.component("badge", Badge)
Vue.component("x-input", XInput)
Vue.component("x-button", XButton)
Vue.component("x-address", XAddress)
Vue.component("x-switch", XSwitch)
Vue.component("x-textarea", XTextarea)
Vue.component("load-more", LoadMore)
Vue.component("flexbox", Flexbox)
Vue.component("flexbox-item", FlexboxItem)
Vue.component("confirm", Confirm)
Vue.component("spinner", Spinner)
Vue.component("selector", Selector)
Vue.component("popup-picker", PopupPicker)
Vue.component("popup", Popup)
Vue.component("popup-radio", PopupRadio)
Vue.component("radio", Radio)
Vue.component("popup-header", PopupHeader)
Vue.component("x-number", XNumber)
Vue.component("search", Search)
Vue.component("group-title", GroupTitle)
Vue.component("inline-loading", InlineLoading)
Vue.component('flow', Flow)
Vue.component('flow-state', FlowState)
Vue.component('flow-line', FlowLine)

Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin,{time:3000})

Vue.directive("transfer-dom", TransferDom)

// 阻止启动生产消息，常用作指令。
Vue.config.productionTip = false 


// Vue.use(VueRouter)
// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })



/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

