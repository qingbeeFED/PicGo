import Vue from 'vue'
import App from './renderer/App.vue'
import router from './renderer/router'
import db from '#/datastore/index'
import ElementUI from 'element-ui'
import { webFrame } from 'electron'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'

webFrame.setVisualZoomLevelLimits(1, 1)
webFrame.setLayoutZoomLevelLimits(0, 0)

Vue.config.productionTip = false
Vue.prototype.$builtInPicBed = [
  'smms',
  'weibo',
  'imgur',
  'qiniu',
  'tcyun',
  'upyun',
  'aliyun',
  'github'
]
Vue.prototype.$db = db

Vue.use(ElementUI)
Vue.use(VueLazyLoad)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
