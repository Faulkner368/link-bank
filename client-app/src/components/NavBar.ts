import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class NavBar extends Vue {

    public logout() {
        this.$store.dispatch("AccountStore/logout");
    }

    /**
     * Returns true if user logged in, else false
     */
    get isLoggedIn(): boolean {
        return this.$store.getters["AccountStore/isLoggedIn"];
    }

    /**
     * Pushes given path name to vue-router, causing user
     * to get routed to given pathname
     * @param pathName
     */
    private goTo(pathName: string) {
        this.$router.push(pathName);
    }

    /**
     * Returns false if current route is HomePage.
     * Do not want nav bar shown on HomePage
     * @returns boolean
     */
    private showNavBar(): boolean {
        return this.$route.name !== "HomePage";
    }
}
