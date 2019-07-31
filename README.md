# h5

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 依赖
    "axios": "^0.19.0",
    "vux": "^2.2.0",
    "fastclick": "^1.0.6",
    "vuex-i18n": "^1.3.1",
    "vuex": "^2.1.1",
    "vue-router": "^3.0.1",
    "vue": "^2.5.2"
    "lodash": "^4.17.15",

## 注意

1. `vux`所有组件使用哪个请在全局注册
2. 后台所有`主键ID`全为字符串，比较运算符推荐采用 `==` ,如非必要不要采用`===`