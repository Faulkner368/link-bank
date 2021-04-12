import Bookmark from "@/types/Bookmark";
import BookmarkService from "@/services/bookmarkService";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Bookmarks extends Vue {
    private bookmarks: Map<string, Bookmark> = new Map<string, Bookmark>();
    private bookmarkService: BookmarkService = new BookmarkService();
    private isDeleting: boolean = false;
    private isLoading: boolean = false;

    public async mounted() {
        await this.loadBookmarks();
    }

    public getBookmarks(): IterableIterator<Bookmark> {
        return this.bookmarks.values();
    }

    public async loadBookmarks() {
        this.isLoading = true;
        const bookmarks = await this.bookmarkService.Bookmarks.list();

        bookmarks.forEach(bookmark => {
            bookmark.dateCreated = bookmark.dateCreated!.split("T")[0];
            this.bookmarks.set(bookmark.id!, bookmark);
        });

        this.isLoading = false;
    }

    /**
     * Deletes bookmark, by sending the bookmark id to the API
     */
    public async deleteBookmark(bookmarkId: string): Promise<void> {
        const remove: boolean = confirm(`Are you sure you want to delete this bookmark`);

        if (remove) {
            this.isDeleting = true;
            this.bookmarks.delete(bookmarkId);
            await this.bookmarkService.Bookmarks.delete(bookmarkId);
            this.isDeleting = false;
        }
    }
}
