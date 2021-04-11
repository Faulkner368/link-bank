import { Bookmark, Client } from "@/api/bookmark-api";

export default class BookmarkService {
    private client: Client = new Client(process.env.VUE_APP_API_BASE_URL);

    public async bookmarks(): Promise<Bookmark[]> {
        return await this.client.bookmarksAll();
    }

    public async bookmark(id: string): Promise<Bookmark> {
        return await this.client.bookmarks(id);
    }
}
