import { Bookmark, Client } from "@/api/bookmark-api";

export default class BookmarkService {
    private client: Client = new Client(process.env.VUE_APP_API_BASE_URL);

    public async bookmarks(): Promise<Bookmark[]> {
        return await this.client.bookmarksAll();
    }

    public async bookmarkById(id: string): Promise<Bookmark> {
        return await this.client.bookmarks2(id);
    }

    public async createBookmark(bookmark: Bookmark): Promise<void> {
        return await this.client.bookmarks(bookmark);
    }

    public async editBookmark(bookmark: Bookmark): Promise<void> {
        return await this.client.bookmarks3(bookmark.id!, bookmark);
    }

    public async deleteBookmark(id: string): Promise<void> {
        return await this.client.bookmarks4(id);
    }
}
