import BookmarkService from "@/services/BookmarkService";
import { User, UserFormValues } from "@/types/User";
import router from "@/router";
import store from "@/store/Store";

const bookmarkService = new BookmarkService();

export const AccountsModule = {
  namespaced: true,

  /**
   * All the apps state
   */
  state: {
    user: null as User | null,
    isLoading: false as boolean,
    token: window.localStorage.getItem("jwt") as string | null,
    appLoaded: false,
    login: false,
    register: false,
  },

  /**
   * All Vuex Account mutations
   */
  mutations: {
    saveIsLoading(state: any, status: boolean) {
      state.isLoading = status;
    },

    setUser(state: any, user: User) {
      state.user = user;
    },

    setToken(state: any, token: string) {
      state.token = token;
    },

    setAppLoaded(state: any, loaded: boolean) {
      state.appLoaded = loaded;
    },

    setLogin(state: any, status: boolean) {
      state.login = status;
    },

    setRegister(state: any, status: boolean) {
      state.register = status;
    }
  },

  /**
   * All Vuex Account actions
   */
  actions: {
    async login(context: any, creds: UserFormValues) {
      context.commit("saveIsLoading", true);

      try {
        const user = await bookmarkService.Account.login(creds);

        if (user.token) {
          window.localStorage.setItem("jwt", user.token);
        }

        context.commit("setToken", user.token);
        context.commit("setUser", user);
        context.commit("setLogin", false);
        store.dispatch("BookmarkStore/loadBookmarks");
      } catch (error) {
        context.commit("saveIsLoading", false);
        throw error;
      }

      context.commit("saveIsLoading", false);
    },

    async logout(context: any) {
      context.commit("setToken", null);
      window.localStorage.removeItem("jwt");
      store.dispatch("BookmarkStore/resetBookmarks");
      context.commit("setUser", null);
      router.push({ name: "HomePage" });
    },

    async getUser(context: any) {

      try {
        const user = await bookmarkService.Account.current();
        context.commit("setUser", user);
        store.dispatch("BookmarkStore/loadBookmarks");
      } catch (error) {
        console.log(error);
      }

      context.commit("setAppLoaded", true);
    },

    async register(context: any, creds: UserFormValues) {
      context.commit("saveIsLoading", true);

      try {
        const user = await bookmarkService.Account.register(creds);

        if (user.token) {
          window.localStorage.setItem("jwt", user.token);
        }

        context.commit("setToken", user.token);
        context.commit("setUser", user);
        context.commit("setRegister", false);
        store.dispatch("BookmarkStore/loadBookmarks");
      } catch (error) {
        context.commit("saveIsLoading", false);
        throw error;
      }

      context.commit("saveIsLoading", false);
    },

    updateIsLoading(context: any, status: boolean) {
      context.commit("saveIsLoading", status);
    },

    setAppLoaded(context: any) {
      context.commit("setAppLoaded", true);
    },

    setLogin(context: any, status: boolean) {
      context.commit("setLogin", status);
    },

    setRegister(context: any, status: boolean) {
      context.commit("setRegister", status);
    }
  },

  /**
   * All Vuex Account getters
   */
  getters: {
    /**
     *
     * @param state
     * @returns boolean
     */
    isLoggedIn(state: any): boolean {
      return !!state.user;
    },

    /**
     * Used to show progress indicator if true for
     * account related API calls.
     * @param state
     * @returns boolean
     */
    isLoading(state: any): boolean {
      return state.isLoading;
    },

    userToken(state: any): string | null {
      return state.token;
    },

    appLoaded(state: any): boolean {
      return state.appLoaded;
    },

    getUser(state: any): User | null {
      return state.user;
    }
  }
};
