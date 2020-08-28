import Vue from 'vue'
import App from './App.vue'
import Learn from './learn'

Vue.config.productionTip = false

console.log(`Variable i ${Learn.i} and a ${Learn.a}`);

new Vue({
  render: h => h(App),
}).$mount('#app')
