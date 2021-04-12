import { Bookmark } from "@/api/bookmark-api";
import BookmarkService from "@/services/bookmarkService";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Bookmarks extends Vue {
    public bookmarks: Bookmark[] = [];
    private bookmarkService: BookmarkService = new BookmarkService();

    public async mounted() {
        this.bookmarks = await this.bookmarkService.bookmarks();
    }

    public processDate(dateCreated: string) {
        return String(dateCreated).substring(0, 16);
    }
}
