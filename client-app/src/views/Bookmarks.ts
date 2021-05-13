import Vue from "vue";
import Component from "vue-class-component";
import BookmarkCard from "@/components/BookmarkCard";
import BookmarkFilter from "@/components/BookmarkFilter";
import BookmarkSort from "@/components/BookmarkSort";
import BookmarkSearch from "@/components/BookmarkSearch";

@Component({
    components: {
        BookmarkCard,
        BookmarkFilter,
        BookmarkSort,
        BookmarkSearch
    }
})
export default class Bookmarks extends Vue {
    get isLoading(): boolean {
        return this.$store.state.BookmarkStore.isLoading;
    }

    get isLoggedIn(): boolean {
        return this.$store.getters["AccountStore/isLoggedIn"];
    }

    get showNoBookmarks(): boolean {
        return this.isLoggedIn && this.$store.getters["BookmarkStore/bookmarks"].length === 0;
    }
}
