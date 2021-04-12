import Vue from "vue";
import Vuex, { Store } from "vuex";
import { BookmarksModule } from "./BookmarksModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    BookmarkStore: BookmarksModule
  }
});
