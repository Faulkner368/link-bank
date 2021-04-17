import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/dist/vuetify.min.css";
import "@/assets/styles/app.css";
import vuetify from "./plugins/vuetify";
import store from "@/store/Store";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  position: "bottom-right",
  timeout: 5000,
  pauseOnHover: true,
  hideProgressBar: false,
};

Vue.use(Toast, options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

// JWT persistence
const token = store.getters["AccountStore/userToken"];
if (token) {
  // If got a JWT call API for user
  store.dispatch("AccountStore/getUser");
  store.dispatch("BookmarkStore/loadBookmarks");
} else {
  // no JWT found but app is loaded
  store.dispatch("AccountStore/setAppLoaded");
}
