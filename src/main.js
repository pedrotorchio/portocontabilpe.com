// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Website from './Website';
import LazyLoad from 'vue-lazyload';

Vue.config.productionTip = false


Vue.use(LazyLoad);
/* eslint-disable no-new */
new Vue({
  el: '#website',
  components: { Website },
  template: '<Website/>'
})
