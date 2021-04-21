import Vue from "vue";
import Component from "vue-class-component";
import NavBar from "@/components/NavBar";
import { Watch } from "vue-property-decorator";

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

@Component({
  components: {
    NavBar,
  }
})
export default class App extends Vue {

  get appLoaded(): boolean {
    return this.$store.state.AccountStore.appLoaded;
  }
}
