import Vue from "vue";
import Router from "vue-router";
import { AppMixin } from "@/mixins/AppMixins";
import HomePage from "@/views/HomePage";
import Bookmarks from "@/views/Bookmarks";
import BookmarkForm from "@/views/BookmarkForm";
import NotFound from "./notfound/NotFound.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/bookmarks",
      name: "Bookmarks",
      component: Bookmarks,
      // beforeEnter: (to, from, next) => {
      //   if (!AppMixin.methods.isProduction()) {
      //     next();
      //   } else {
      //     router.push({ name: "HomePage"});
      //   }
      // },
    },
    {
      path: "/bookmark/form/",
      name: "BookmarkForm",
      component: BookmarkForm,
    }
  ],
});

export default router;
