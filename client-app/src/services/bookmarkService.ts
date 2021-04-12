import Bookmark from "@/types/Bookmark";
import axios, { AxiosResponse, AxiosStatic } from "axios";

export default class BookmarkService {
    public Bookmarks = {
        list: () => this.requests.get<Bookmark[]>("/bookmarks"),
        details: (id: string) => this.requests.get<Bookmark>(`/bookmarks/${id}`),
        create: (bookmark: Bookmark) => this.axios.post<void>("/bookmarks", bookmark),
        edit: (bookmark: Bookmark) => this.axios.put<void>(`/bookmarks/${bookmark.id}`, bookmark),
        delete: (id: string) => this.axios.delete<void>(`/bookmarks/${id}`)
    };

    private axios: AxiosStatic = axios;

    private requests = {
        get: <T> (url: string) => axios.get<T>(url).then(this.responseBody),
        post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(this.responseBody),
        put: <T> (url: string, body = {}) => axios.put<T>(url, body).then(this.responseBody),
        del: <T> (url: string) => axios.delete(url).then<T>(this.responseBody),
    };

    public constructor() {
        this.axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

        this.axios.interceptors.response.use(async response => {
            try {
                return response;
            } catch (error) {
                console.log(error);
                return await Promise.reject(error);
            }
        });
    }

    private responseBody = <T> (response: AxiosResponse<T>) => response.data;
}
