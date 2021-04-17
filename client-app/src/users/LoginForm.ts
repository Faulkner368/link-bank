import ValidationRules from "@/shared/ValidationRules";
import Vue from "vue";
import Component from "vue-class-component";
import { LoginError, UserFormValues } from "@/types/User";

@Component
export default class LoginForm extends Vue {
    private loginForm: UserFormValues = { email: "", password: "" };
    private validate: ValidationRules = new ValidationRules();
    private error: LoginError = { show: false, message: "" };
    private showPassword: boolean = false;

    public login() {
        this.error.show = false;

        this.$store.dispatch("AccountStore/login", this.loginForm).catch(error => {
            this.error.message = "Invalid password or email";
            this.error.show = true;
        });
    }

    get showError(): boolean {
        return this.error.show;
    }

    get errorMessage(): string {
        return this.error.message;
    }

    get isLoading(): boolean {
        return this.$store.state.AccountStore.isLoading;
    }

    get isLoggedIn(): boolean {
        return !this.$store.getters["AccountStore/isLoggedIn"];
    }

    public passwordFormFieldType() {
        return this.showPassword ? "text" : "password";
    }
}
