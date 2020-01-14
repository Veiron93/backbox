import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel'
import VModal  from 'vue-js-modal'


Vue.config.productionTip = false
Vue.use(VueCarousel)
Vue.use(VModal, { componentName: "vue-modal" })


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
