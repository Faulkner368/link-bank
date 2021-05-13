import BookmarkService from "@/services/BookmarkService";
import Bookmark from "@/types/Bookmark";
import store from "@/store/Store";

const bookmarkService = new BookmarkService();

export const BookmarksModule = {
  namespaced: true,

  /**
   * All the apps state
   */
  state: {
    bookmarkRegistry: [] as Bookmark[],
    isLoading: false as boolean,
    selectedBookmark: { id: "", title: "", description: "", url: "", dateCreated: undefined, tags: "" } as Bookmark,
    filter: "",
    sortBy: "title"
  },

  /**
   * All Vuex CRUD mutations
   */
  mutations: {
    saveBookmarks(state: any, bookmarks: Bookmark[]) {
      bookmarks.forEach(bookmark => {
        bookmark.dateCreated = bookmark.dateCreated!.split("T")[0];
        state.bookmarkRegistry.push(bookmark);
      });
    },
    saveBookmark(state: any, bookmark: Bookmark) {
      state.bookmarkRegistry = [...state.bookmarkRegistry.filter((bm: { id: string; }) => bm.id !== bookmark.id), bookmark];
    },
    addBookmark(state: any, bookmark: Bookmark) {
      state.bookmarkRegistry.push(bookmark);
    },
    removeBookmark(state: any, bookmarkId: string) {
      state.bookmarkRegistry = [...state.bookmarkRegistry.filter((bm: { id: string; }) => bm.id !== bookmarkId)];
    },
    saveIsLoading(state: any, status: boolean) {
      state.isLoading = status;
    },
    setSelectedBookmark(state: any, bookmark: Bookmark) {
      state.selectedBookmark = bookmark;
    },
    unsetSelectedBookmark(state: any) {
      state.selectedBookmark = { id: "", title: "", description: "", url: "", dateCreated: undefined, tags: "" };
    },
    resetBookmarks(state: any) {
      state.bookmarkRegistry = [] as Bookmark[];
    },
    setFilter(state: any, tag: string) {
      state.filter = tag;
    },
    setSortBy(state: any, sortBy: string) {
      state.sortBy = sortBy;
    }
  },

  /**
   * All Vuex CRUD actions
   */
  actions: {
    async loadBookmarks(context: any) {

      if (store.getters["BookmarkStore/bookmarks"].length < 1) {
        context.commit("saveIsLoading", true);
        context.commit("saveBookmarks", [] as Bookmark[]);

        try {
          const bookmarks = await bookmarkService.Bookmarks.list();
          context.commit("saveBookmarks", bookmarks);
        } catch (error) {
          console.log(error);
        }

        context.commit("saveIsLoading", false);
      }
    },
    updateBookmark(context: any, bookmark: Bookmark) {
      context.commit("saveBookmark", bookmark);
    },
    createBookmark(context: any, bookmark: Bookmark) {
      context.commit("addBookmark", bookmark);
    },
    deleteBookmark(context: any, bookmarkId: string) {
      context.commit("removeBookmark", bookmarkId);
    },
    updateIsLoading(context: any, status: boolean) {
      context.commit("saveIsLoading", status);
    },
    selectBookmark(context: any, bookmark: Bookmark) {
      context.commit("setSelectedBookmark", bookmark);
    },
    resetSelectedBookmark(context: any) {
      context.commit("unsetSelectedBookmark");
    },
    resetBookmarks(context: any) {
      context.commit("resetBookmarks");
    },
    updateFilter(context: any, tag: string) {
      context.commit("setFilter", tag);
    },
    updateSortBy(context: any, sortBy: string) {
      context.commit("setSortBy", sortBy);
    }
  },

  getters: {
    /**
     * Returns all bookmarks in the bookmarkRegistry
     * which is populated by an API call.
     * @param state
     * @returns Bookmark[]
     */
    bookmarks(state: any): Bookmark[] {
      return state.bookmarkRegistry;
    },

    /**
     * Used to show progress indicator if true for
     * adding, updating and deleting bookmarks.
     * @param state
     * @returns boolean
     */
    isLoading(state: any): boolean {
      return state.isLoading;
    },

    /**
     * Returns the selectedBookmark as type Bookmark
     * @param state
     * @returns Bookmark
     */
    selectedBookmark(state: any): Bookmark {
      return state.selectedBookmark as Bookmark;
    },
    getFilter(state: any): string {
      return state.filter;
    },
    getSortBy(state: any): string {
      return state.sortBy;
    },
    getTags(state: any): string[] {
      const tags = state.bookmarkRegistry.map((bm: Bookmark) => bm.tags);

      return tags as string[];
    }
  }
};
