// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// event listener
import Listener from "./lib/Listener"
Vue.use(Listener);

// global functions
import GlobalFunctions from "./lib/GlobalFunctions"
Vue.use(GlobalFunctions);

// websocket handler
import WebSocketHandler from "./lib/WebSocket"
Vue.use(WebSocketHandler);

// Network Handler
import NetworkConfig from "./config/NetworkConfig";
import NetworkHandler from "./lib/NetworkHandler";
Vue.use(NetworkHandler, NetworkConfig);


//vuex store
import store from "./store"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
