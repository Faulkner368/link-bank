import Vue from "vue";
import axios from "axios";
import Component from "vue-class-component";
import ServerError from "@/types/ServerError";

@Component
export default class TestError extends Vue {
    private baseUrl: string = `${process.env.VUE_APP_API_BASE_URL}/`;
    private errors: string[] | null = [];
    private serverError: ServerError = { statusCode: 0, message: "", details: "null" };

    public setError(errors: string[] | null) {
        this.errors = errors;
    }

    public setServerError(error: ServerError) {
        this.serverError = error;
    }

    public handleNotFound() {
        axios.get(this.baseUrl + "buggy/not-found").catch(err => console.log(err.response));
    }

    public handleBadRequest() {
        axios.get(this.baseUrl + "buggy/bad-request").catch(err => console.log(err.response));
    }

    public handleServerError() {
        axios.get(this.baseUrl + "buggy/server-error").catch(err => this.setServerError(err));
    }

    public handleUnauthorised() {
        axios.get(this.baseUrl + "buggy/unauthorised").catch(err => console.log(err.response));
    }

    public handleBadGuid() {
        axios.get(this.baseUrl + "bookmarks/notaguid").catch(err => console.log(err.response));
    }

    public handleValidationError() {
        axios.post(this.baseUrl + "bookmarks", {}).catch(err => this.setError(err));
    }

    get serverErrorMessage(): string {
        return this.serverError.message;
    }

    get serverErrorDetails(): string {
        return this.serverError.details;
    }

    get serverErrorStatusCode(): number {
        return this.serverError.statusCode;
    }
}
