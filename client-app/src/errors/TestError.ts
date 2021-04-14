import Vue from "vue";
import axios from "axios";
import Component from "vue-class-component";

@Component
export default class TestError extends Vue {
    private baseUrl: string = "http://localhost:5000/api/";

    public handleNotFound() {
        axios.get(this.baseUrl + "buggy/not-found").catch(err => console.log(err.response));
    }

    public handleBadRequest() {
        axios.get(this.baseUrl + "buggy/bad-request").catch(err => console.log(err.response));
    }

    public handleServerError() {
        axios.get(this.baseUrl + "buggy/server-error").catch(err => console.log(err.response));
    }

    public handleUnauthorised() {
        axios.get(this.baseUrl + "buggy/unauthorised").catch(err => console.log(err.response));
    }

    public handleBadGuid() {
        axios.get(this.baseUrl + "bookmarks/notaguid").catch(err => console.log(err.response));
    }

    public handleValidationError() {
        axios.post(this.baseUrl + "bookmarks", {}).catch(err => console.log(err.response));
    }
}
