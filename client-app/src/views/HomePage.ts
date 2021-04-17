import Vue from "vue";
import Component from "vue-class-component";
import LoginForm from "@/users/LoginForm";

@Component({
    components: {
        LoginForm,
    }
})
export default class HomePage extends Vue {
}
