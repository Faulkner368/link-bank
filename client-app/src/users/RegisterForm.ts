import ValidationRules from "@/shared/ValidationRules";
import Vue from "vue";
import Component from "vue-class-component";
import { AccountFormError, UserFormValues } from "@/types/User";
import { AxiosResponse } from "axios";

@Component
export default class RegisterForm extends Vue {
    private registerForm: UserFormValues = { email: "", password: "" };
    private validate: ValidationRules = new ValidationRules();
    private error: AccountFormError = { show: false, message: "" };
    private showPassword: boolean = false;

    public register() {
        this.error.show = false;

        this.$store.dispatch("AccountStore/register", this.registerForm).catch(error => {
            console.log(error);
            this.error.message = error[0];
            this.error.show = true;
        });
    }

    public cancelForm() {
        this.$store.dispatch("AccountStore/setRegister", false);
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

    get registerDialog(): boolean {
        return this.$store.state.AccountStore.register;
    }

    public passwordFormFieldType() {
        return this.showPassword ? "text" : "password";
    }
}
