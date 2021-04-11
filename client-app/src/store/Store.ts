import Vue from "vue";
import Vuex, { Store } from "vuex";
import { UserModule } from "./UserModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserModule
  }
});
