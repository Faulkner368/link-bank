import { Bookmark } from "@/api/bookmark-api";
import BookmarkService from "@/services/bookmarkService";
import Vue from "vue";
import Component from "vue-class-component";
import { v4 as uuidv4 } from "uuid";

@Component
export default class BookmarkForm extends Vue {
    public bookmarkService: BookmarkService = new BookmarkService();
    public bookmark: Bookmark = new Bookmark();

    public constructor() {
        super();
    }

    public async createBookmark() {
        this.bookmark.id = uuidv4();
        console.log(this.bookmark);
        return await this.bookmarkService.createBookmark(this.bookmark);
    }

    public async editBookmark() {
        return await this.bookmarkService.editBookmark(this.bookmark);
    }
}
