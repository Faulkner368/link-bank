import Bookmark from "@/types/Bookmark";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class BookmarkSort extends Vue {
    private overlay: boolean = false;
    private selectedProp: string = "";

    private sort() {
        this.$store.dispatch("BookmarkStore/updateSortBy", this.selectedProp);
    }

    get props() {
        const tempBookmark: Bookmark = {
            id: "",
            title: "",
            description: "",
            url: "",
            tags: "",
            dateCreated: ""
        };

        const props = [...Object.keys(tempBookmark), ""].filter(prop => prop !== "id" && prop !== "dateCreated");

        return props;
    }
}
