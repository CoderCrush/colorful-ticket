
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import global from "./global"

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(global)
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
import global from "./global"
import * as Pinia from 'pinia'
export function createApp() {
  const app = createSSRApp(App)
  app.use(global)
  return {
    app,
	Pinia
  }
}
// #endif