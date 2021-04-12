import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/dist/vuetify.min.css";
import "@/assets/styles/app.css";
import vuetify from "./plugins/vuetify";
import store from "@/store/Store";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

store.dispatch("BookmarkStore/loadBookmarks");

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
