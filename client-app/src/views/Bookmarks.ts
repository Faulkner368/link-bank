import Vue from "vue";
import Component from "vue-class-component";
import BookmarkCard from "@/components/BookmarkCard";
import BookmarkFilter from "@/components/BookmarkFilter";

@Component({ components: { BookmarkCard, BookmarkFilter } })
export default class Bookmarks extends Vue {
    get isLoading(): boolean {
        return this.$store.state.BookmarkStore.isLoading;
    }
}
