import { Bookmark } from "@/api/bookmark-api";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class BookmarkForm extends Vue {
    // public bookmark: Bookmark;

    public constructor() {
        super();

        // this.bookmark = {
        //     id: "",
        //     title: "",
        //     description: "",
        //     url: "",
        //     dateCreated: undefined,
        //     tags: "",
        // }
    }
}
