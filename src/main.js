import Vue from "vue";
import App from "./App.vue";
// import './registerServiceWorker'
// import wb from "./registerServiceWorker";
// import "bootstrap/dist/css/bootstrap.css";
import VueAnalytics from "vue-analytics";
Vue.use(VueAnalytics, {
    id: "UA-160831087-1"
});

Vue.config.productionTip = false;
// Vue.prototype.$workbox = wb;

new Vue({
    render: h => h(App)
}).$mount("#app");
