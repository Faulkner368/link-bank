import Bookmark from "@/types/Bookmark";
import ServerError from "@/types/ServerError";
import axios, { AxiosError, AxiosResponse, AxiosStatic } from "axios";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class BookmarkService extends Vue {
    public Bookmarks = {
        list: () => this.requests.get<Bookmark[]>("/bookmarks"),
        details: (id: string) => this.requests.get<Bookmark>(`/bookmarks/${id}`),
        create: (bookmark: Bookmark) => this.axios.post<void>("/bookmarks", bookmark),
        edit: (bookmark: Bookmark) => this.axios.put<void>(`/bookmarks/${bookmark.id}`, bookmark),
        delete: (id: string) => this.axios.delete<void>(`/bookmarks/${id}`)
    };

    private axios: AxiosStatic = axios;

    private requests = {
        get: <T>(url: string) => axios.get<T>(url).then(this.responseBody),
        post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(this.responseBody),
        put: <T>(url: string, body = {}) => axios.put<T>(url, body).then(this.responseBody),
        del: <T>(url: string) => axios.delete(url).then<T>(this.responseBody),
    };

    public constructor() {
        super();

        this.axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

        this.axios.interceptors.response.use(async response => {
            return response;
        }, (error: AxiosError) => {
            const { data, status, config } = error.response!;

            switch (status) {
                case 400:
                    if (typeof data === "string") {
                        this.$toast.error(data, {});
                    }

                    if (config.method === "get" && data.errors.hasOwnProperty("id")) {
                        // Handles the invalid guid api response
                        this.$toast.error("Not found", {});
                        this.$router.push({ name: "NotFound" });
                    }

                    if (data.errors) {
                        const modalStateErrors = [];

                        for (const key in data.errors) {
                            if (data.errors[key]) {
                                modalStateErrors.push(data.errors[key]);
                            }
                        }
                        this.$toast.error("Bad request", {});
                        throw modalStateErrors.flat();
                    }
                    break;
                case 401:
                    this.$toast.error("Unauthorised", {});
                    break;
                case 404:
                    this.$toast.error("Not found", {});
                    this.$router.push({ name: "NotFound" });
                    break;
                case 500:
                    this.$toast.error("Server error", {});
                    throw data as ServerError;
                    break;
            }
            return Promise.reject(error);
        });
    }

    private responseBody = <T>(response: AxiosResponse<T>) => response.data;
}
