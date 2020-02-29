import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.filter('formatDate', (value, pattern) => {
  if (value) {
    return moment(value).format(pattern)
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
