// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css'
import Navi from './components/Navi/Navi'

/*Vue.config.productionTip = false*/
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#navi',
  router,
  // components: { App },
  //  template: '<App/>',
  render:h => h(App)
});
/*new Vue({
  el: '#navi',
  router,
  // components: { Navi },
  //  template: '<Navi/>',
  render:h => h(Navi)
});*/
