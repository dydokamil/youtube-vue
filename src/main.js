import Vue from "vue"
import App from "./App.vue"
import Vuex from "vuex"
import axios from "axios"

import store from "./store"

axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3"

Vue.config.productionTip = false

Vue.use(Vuex)

const vuexStore = new Vuex.Store(store)

new Vue({
  render: h => h(App),
  store: vuexStore,
}).$mount("#app")
