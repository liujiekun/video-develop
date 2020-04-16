// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'chimee-player/lib/chimee-player.browser.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import pluginUtil from '@/plugins/util'

Vue.use(ElementUI, {
  size: 'small'
})

Vue.use(pluginUtil)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
