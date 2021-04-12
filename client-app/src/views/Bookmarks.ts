import { Bookmark } from "@/api/bookmark-api";
import BookmarkService from "@/services/bookmarkService";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Bookmarks extends Vue {
    private bookmarks: Bookmark[] = [];
    private bookmarkService: BookmarkService = new BookmarkService();
    private isDeleting: boolean = false;

    public async mounted() {
        this.bookmarks = await this.bookmarkService.bookmarks();
    }

    public processDate(dateCreated: string): string {
        return String(dateCreated).substring(0, 16);
    }

    /**
     * Deletes bookmark, by sending the bookmark id to the API
     */
    public async deleteBookmark(bookmarkId: string): Promise<void> {
        const remove: boolean = confirm(`Are you sure you want to delete this bookmark`);

        if (remove) {
            this.isDeleting = true;
            this.bookmarks = [...this.bookmarks.filter(b => b.id !== bookmarkId)];
            await this.bookmarkService.deleteBookmark(bookmarkId);
            this.isDeleting = false;
        }
    }
}
