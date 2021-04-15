import Vue from "vue";
import Router from "vue-router";
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
      component: Bookmarks
    },
    {
      path: "/bookmark/create",
      name: "BookmarkCreate",
      component: BookmarkForm,
    },
    {
      path: "/bookmark/edit/:id",
      name: "BookmarkEdit",
      component: BookmarkForm,
    },
    {
      path: "/test",
      name: "TestError",
      component: TestError,
      // beforeEnter: (to, from, next) => {
      //   if (!AppMixin.methods.isProduction()) {
      //     next();
      //   } else {
      //     router.push({ name: "HomePage"});
      //   }
      // },
    }
  ],
});

export default router;
