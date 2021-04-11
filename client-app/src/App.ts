import Vue from "vue";
import Component from "vue-class-component";
import NavBar from "@/components/NavBar";

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

@Component({ components: { NavBar } })
export default class App extends Vue {

}
