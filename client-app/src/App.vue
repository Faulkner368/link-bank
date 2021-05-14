<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-overlay :value="!appLoaded">
      <v-progress-circular
        indeterminate
        color="rgb(240, 42, 115)"
      ></v-progress-circular>
    </v-overlay>
  </v-app>
</template>
<script lang="ts" src="./App.ts">
</script>
