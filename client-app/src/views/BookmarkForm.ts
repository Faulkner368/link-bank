import Bookmark from "@/types/Bookmark";
import BookmarkService from "@/services/BookmarkService";
import Vue from "vue";
import Component from "vue-class-component";
import { v4 as uuidv4 } from "uuid";

@Component
export default class BookmarkForm extends Vue {
    private bookmarkService: BookmarkService = new BookmarkService();
    private editMode: boolean = false;

    public setIsLoading(status: boolean) {
        this.$store.dispatch("BookmarkStore/updateIsLoading", status);
    }

    get isLoading(): boolean {
        return this.$store.state.BookmarkStore.isLoading;
    }

    get selectedBookmark(): Bookmark {
        return this.$store.state.BookmarkStore.selectedBookmark;
    }

    set selectedBookmark(bookmark: Bookmark) {
        this.$store.dispatch("BookmarkStore/selectBookmark", bookmark);
    }

    public async mounted() {
        if (this.$route.params.id !== undefined) {
            this.editMode = true;
            try {
                this.selectedBookmark = await this.bookmarkService.Bookmarks.details(this.$route.params.id);
            } catch (error) {
                console.log(error);
            }
        }
    }

    /**
     * Create new bookmark, by sending the bookmark property to the API
     */
    public async createBookmark(): Promise<void> {
        this.setIsLoading(true);
        this.selectedBookmark.id = uuidv4();

        try {
            await this.bookmarkService.Bookmarks.create(this.selectedBookmark);
            this.$store.dispatch("BookmarkStore/createBookmark", this.selectedBookmark);

            // To reset form / selectedBookmark in Vuex
            this.$store.dispatch("BookmarkStore/resetSelectedBookmark");

            this.setIsLoading(false);
            this.$router.push({ name: "Bookmarks" });
        } catch (error) {
            console.log(error);
        }

        this.setIsLoading(false);
    }

    /**
     * Edit bookmark, by sending the edited bookmark property to the API
     */
    public async editBookmark(): Promise<void> {
        this.setIsLoading(true);

        try {
            const response = await this.bookmarkService.Bookmarks.edit(this.selectedBookmark);
            this.$store.dispatch("BookmarkStore/updateBookmark", this.selectedBookmark);

            // To reset form / selectedBookmark in Vuex
            this.$store.dispatch("BookmarkStore/resetSelectedBookmark");

            this.setIsLoading(false);
            this.$router.push({ name: "Bookmarks" });
        } catch (error) {
            console.log(error);
        }

        this.setIsLoading(false);
    }

    private cancelForm() {
        // To reset form / selectedBookmark in Vuex
        this.$store.dispatch("BookmarkStore/resetSelectedBookmark");
        this.$router.push({ name: "Bookmarks" });
    }
}
