import Bookmark from "@/types/Bookmark";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class BookmarkFilter extends Vue {
    private selectedTag: string = "";
    private selectedProp: string = "";
    private showUpdateBtn: boolean = true;

    private update() {
        if (this.selectedProp !== "" && this.selectedTag !== "") {
            this.showUpdateBtn = false;
            this.filter();
            this.sort();
        } else if (this.selectedProp === "" && this.selectedTag !== "") {
            this.showUpdateBtn = false;
            this.filter();
        } else if(this.selectedProp !== "" && this.selectedTag === "") {
            this.showUpdateBtn = false;
            this.sort();
        }
    }

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

    private filter() {
        this.$store.dispatch("BookmarkStore/updateFilter", this.selectedTag);
    }

    private reset() {
        this.showUpdateBtn = true;
        this.selectedTag = "";
        this.selectedProp = "";
        this.$store.dispatch("BookmarkStore/updateFilter", this.selectedTag);
        this.$store.dispatch("BookmarkStore/updateSortBy", this.selectedProp);
    }

    get tags(): string[] {
        return this.$store.getters["BookmarkStore/getTags"];
    }
}
