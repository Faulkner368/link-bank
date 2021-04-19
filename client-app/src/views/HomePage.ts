import Vue from "vue";
import Component from "vue-class-component";
import LoginForm from "@/users/LoginForm";
import RegisterForm from "@/users/RegisterForm";

@Component({
    components: {
        LoginForm,
        RegisterForm,
    }
})
export default class HomePage extends Vue {

    public loginDialog() {
        this.$store.dispatch("AccountStore/setLogin", true);
    }

    public registerDialog() {
        this.$store.dispatch("AccountStore/setRegister", true);
    }

    get isLoggedIn(): boolean {
        return !this.$store.getters["AccountStore/isLoggedIn"];
    }
}
