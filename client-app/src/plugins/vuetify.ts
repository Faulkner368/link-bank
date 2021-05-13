import Vue from "vue";
import Vuetify, {  } from "vuetify/lib"; // Add components like VIcon, VCard, etc if they don't load

Vue.use(Vuetify, { components: {  }});

export default new Vuetify({
  icons: {
    iconfont: "md",
  }
});
