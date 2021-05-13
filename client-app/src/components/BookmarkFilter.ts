import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class BookmarkFilter extends Vue {
    private overlay: boolean = false;
    private selectedTag: string = "";
    private showFilterBtn: boolean = true;

    private filter() {
        this.showFilterBtn = false;
        this.$store.dispatch("BookmarkStore/updateFilter", this.selectedTag);
    }

    private reset() {
        this.showFilterBtn = true;
        this.selectedTag = "";
        this.$store.dispatch("BookmarkStore/updateFilter", this.selectedTag);
    }

    get tags(): string[] {
        return this.$store.getters["BookmarkStore/getTags"];
    }
}
