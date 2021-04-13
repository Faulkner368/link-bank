import Bookmark from "@/types/Bookmark";
import BookmarkService from "@/services/bookmarkService";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Bookmarks extends Vue {
    private bookmarkService: BookmarkService = new BookmarkService();

    public setIsLoading(status: boolean) {
        this.$store.dispatch("BookmarkStore/updateIsLoading", status);
    }

    get isLoading(): boolean {
        return this.$store.state.BookmarkStore.isLoading;
    }

    get bookmarks(): Promise<Bookmark[]> {
        return this.$store.getters["BookmarkStore/bookmarks"];
    }

    /**
     * Deletes bookmark, by sending the bookmark id to the API
     */
    public async deleteBookmark(bookmarkId: string): Promise<void> {
        const remove: boolean = confirm(`Are you sure you want to delete this bookmark`);

        if (remove) {
            this.setIsLoading(true);

            try {
                await this.bookmarkService.Bookmarks.delete(bookmarkId);
                this.$store.dispatch("BookmarkStore/deleteBookmark", bookmarkId);
            } catch (error) {
                console.log(error);
            }

            this.setIsLoading(false);
        }
    }
}
