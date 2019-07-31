import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 这是默认的路径
        {
          path: '/',
          redirect: {
              name: 'Home'
          },
          meta:{}
        },
        // 接下来配置路由如下面一样去配置，这样起到的效果是点击这个路由的时候才加载这个页面，减低浏览器的加载压力 
        {
          path: "/hell",
          name: "HelloWorld",
          component: () =>
            import( "@/components/HelloWorld")
        },
        {
          path: '/home',
          name: 'Home',
          component: () => import ('@/components/HelloFromVux'),
          meta:{
              title:"开始页面"
          }
        }
  ]
})

