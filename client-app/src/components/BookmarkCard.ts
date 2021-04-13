import BookmarkService from "@/services/BookmarkService";
import Bookmark from "@/types/Bookmark";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class BookmarkCard extends Vue {
    private bookmarkService: BookmarkService = new BookmarkService();

    /**
     * Gets all bookmarks from Vuex
     */
    get bookmarks(): Bookmark[] {
        return this.$store.getters["BookmarkStore/bookmarks"];
    }

    /**
     * Sets the isLoading value in Vuex
     * @param status boolean
     */
    private setIsLoading(status: boolean) {
        this.$store.dispatch("BookmarkStore/updateIsLoading", status);
    }

    /**
     * Deletes bookmark, by sending the bookmark id to the API
     */
    private async deleteBookmark(bookmarkId: string): Promise<void> {
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