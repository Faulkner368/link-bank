<template>
  <v-app-bar v-if="showNavBar()" class="nav-bar" absolute dark height="50">
    <v-container id="nav-container">
      <v-icon class="menu-icon">bookmarks</v-icon>
      <v-toolbar-title @click="goTo('/')">Link Bank</v-toolbar-title>
      <v-toolbar-title @click="goTo('/bookmarks')" class="middle-menu-item">Bookmarks</v-toolbar-title>
      <v-toolbar-title>
        <v-btn color="success" @click="goTo('/bookmark/create')">create</v-btn>
      </v-toolbar-title>
    </v-container>
  </v-app-bar>
</template>
<script lang="ts" src="./NavBar.ts"></script>
