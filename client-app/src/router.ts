import Vue from "vue";
import Router from "vue-router";
import store from "@/store/Store";
import { AppMixin } from "@/mixins/AppMixins";
import HomePage from "@/views/HomePage";
import Bookmarks from "@/views/Bookmarks";
import BookmarkForm from "@/views/BookmarkForm";
import NotFound from "./notfound/NotFound";
import TestError from "@/errors/TestError";

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
      //   if (store.getters["AccountStore/isLoggedIn"]) {
      //     next();
      //   } else {
      //     router.push({ name: "HomePage"});
      //   }
      // },
    },
    {
      path: "/bookmark/create",
      name: "BookmarkCreate",
      component: BookmarkForm,
      beforeEnter: (to, from, next) => {
        if (store.getters["AccountStore/isLoggedIn"]) {
          next();
        } else {
          router.push({ name: "HomePage"});
        }
      },
    },
    {
      path: "/bookmark/edit/:id",
      name: "BookmarkEdit",
      component: BookmarkForm,
      beforeEnter: (to, from, next) => {
        if (store.getters["AccountStore/isLoggedIn"]) {
          next();
        } else {
          router.push({ name: "HomePage"});
        }
      },
    },
    {
      path: "/test",
      name: "TestError",
      component: TestError,
      beforeEnter: (to, from, next) => {
        if (!AppMixin.methods.isProduction()) {
          next();
        } else {
          router.push({ name: "HomePage"});
        }
      },
    }
  ],
});

export default router;
