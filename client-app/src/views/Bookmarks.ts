import Bookmark from "@/types/Bookmark";
import BookmarkService from "@/services/bookmarkService";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Bookmarks extends Vue {
    // private bookmarks: Bookmark[] = [];
    private bookmarkService: BookmarkService = new BookmarkService();
    private isDeleting: boolean = false;
    private isLoading: boolean = false;

    public constructor() {
        super();
        // Get bookmarks from Vuex state management
        // this.bookmarks = this.$store.getters["BookmarkStore/bookmarksMap"];
    }

    get bookmarks(): Bookmark[] {
        return this.$store.getters["BookmarkStore/bookmarks"];
    }

    /**
     * Deletes bookmark, by sending the bookmark id to the API
     */
    public async deleteBookmark(bookmarkId: string): Promise<void> {
        const remove: boolean = confirm(`Are you sure you want to delete this bookmark`);

        if (remove) {
            this.isDeleting = true;
            this.$store.state.bookmarkRegistry = [...this.bookmarks.filter(bm => bm.id !== bookmarkId)];

            try {
                await this.bookmarkService.Bookmarks.delete(bookmarkId);
                this.$store.dispatch("BookmarkStore/deleteBookmark", bookmarkId);
            } catch (error) {
                console.log(error);
            }

            this.isDeleting = false;
        }
    }
}
