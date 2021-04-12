import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class NavBar extends Vue {

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
