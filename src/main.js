import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import Rooms from './components/Rooms'
import Hotel from './components/Hotel'
import about from './components/about'
import './assets/js/jquery-3.3.1.min.js'
import './assets/js/bootstrap.min.js'
import './assets/js/jquery.magnific-popup.min.js'
import './assets/js/jquery-ui.min.js'
import './assets/js/jquery.slicknav.js'
import './assets/js/jquery.nice-select.min.js'
import './assets/js/main.js'
Vue.use(VueRouter);
const routes= [
  {path:"/", component:Hotel},
  {path:"/Rooms", component:Rooms},
  {path:"/about", component:about}
];

const  router= new VueRouter({
  routes,
  mode:'history'
});
new Vue({
  el:'#app',
  router,
  render: h => h(App)
});


