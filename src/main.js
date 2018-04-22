import Vue from "vue"
import App from "./App.vue"
import Vuex from "vuex"
import axios from "axios"
import VueRouter from "vue-router"

import store from "./store"

axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3"

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const vuexStore = new Vuex.Store(store)

const router = new VueRouter({ mode: "history" })

new Vue({
  render: h => h(App),
  router,
  store: vuexStore,
}).$mount("#app")
