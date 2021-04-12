import Bookmark from "@/types/Bookmark";
import BookmarkService from "@/services/bookmarkService";
import Vue from "vue";
import Component from "vue-class-component";
import { v4 as uuidv4 } from "uuid";

@Component
export default class BookmarkForm extends Vue {
    private bookmarkService: BookmarkService = new BookmarkService();
    private bookmark: Bookmark;
    private editMode: boolean = false;
    private isSaving: boolean = false;

    public constructor() {
        super();

        this.bookmark = { id: "", title: "", description: "", url: "", dateCreated: undefined, tags: "" };
    }

    public async mounted() {
        if (this.$route.params.id !== undefined) {
            this.editMode = true;
            this.bookmark = await this.bookmarkService.Bookmarks.details(this.$route.params.id);
        }
    }

    /**
     * Create new bookmark, by sending the bookmark property to the API
     */
    public async createBookmark(): Promise<void> {
        this.isSaving = true;
        this.bookmark.id = uuidv4();
        console.log(this.bookmark);
        await this.bookmarkService.Bookmarks.create(this.bookmark);
        this.isSaving = false;
        this.$router.push({ name: "Bookmarks" });
    }

    /**
     * Edit bookmark, by sending the edited bookmark property to the API
     */
    public async editBookmark(): Promise<void> {
        this.isSaving = true;
        await this.bookmarkService.Bookmarks.edit(this.bookmark);
        this.isSaving = false;
        this.$router.push({ name: "Bookmarks" });
    }
}
