import BookmarkService from "@/services/bookmarkService";
import Bookmark from "@/types/Bookmark";

const bookmarkService = new BookmarkService();

export const BookmarksModule = {
  namespaced: true,
  state: {
    bookmarkRegistry: [],
    isLoading: false,
    title: "Vuex Title"
  },
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
  },
  actions: {
    async loadBookmarks(context: any) {

      try {
        const bookmarks = await bookmarkService.Bookmarks.list();
        context.commit("saveBookmarks", bookmarks);
      } catch (error) {
        console.log(error);
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
    }
  },
  getters: {
    bookmarks(state: any): Bookmark[] {
      return state.bookmarkRegistry;
    },
    title(state: any): string {
      return state.title;
    }
  }
};
