import BookmarkService from "@/services/bookmarkService";
import Bookmark from "@/types/Bookmark";

const bookmarkService = new BookmarkService();

export const BookmarksModule = {
  namespaced: true,
  state: {
    bookmarkRegistry: new Map<string, Bookmark>()
  },
  mutations: {
    saveBookmarks(state: any, bookmarks: Map<string, Bookmark>) {
      bookmarks.forEach(bookmark => {
        bookmark.dateCreated = bookmark.dateCreated!.split("T")[0];
        state.bookmarkRegistry.set(bookmark.id!, bookmark);
      });
    }
  },
  actions: {
    async loadBookmarks(context: any) {

      try {
        const bookmarks = await bookmarkService.Bookmarks.list();
        context.commit("saveBookmarks", bookmarks);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    bookmarks(state: any): Map<string, Bookmark> {
      return state.bookmarkRegistry;
    },
  },
  setters: {

  }
};
