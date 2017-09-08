// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import StreamTemplate from "./components/StreamTemplate.vue"
import ChatTemplate from "./components/ChatTemplate.vue"

Vue.config.productionTip = false

Vue.component("stream-template", StreamTemplate);
Vue.component("chat-template", ChatTemplate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
