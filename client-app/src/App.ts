import Vue from "vue";
import Component from "vue-class-component";
import HeaderSection from "@/components/HeaderSection";

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

@Component({ components: { HeaderSection } })
export default class App extends Vue {

}
