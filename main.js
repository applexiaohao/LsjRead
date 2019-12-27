import Vue from 'vue'
import App from './App'

import lsjStore from './store/LSJStore.js'

Vue.config.productionTip = false;
Vue.prototype.$store = lsjStore;
App.mpType = 'app';

const app = new Vue({
	lsjStore,
    ...App
})
app.$mount()
