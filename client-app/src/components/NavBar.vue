<template>
  <v-app-bar v-if="showNavBar()" class="nav-bar" absolute dark height="50">
    <!-- Desktop -->
    <div class="nav-desktop">
      <v-icon class="menu-icon-desktop">bookmarks</v-icon>
      <v-toolbar-title class="menu-title-desktop" @click="goTo('/')">Link Bank</v-toolbar-title>
      <v-toolbar-title
        v-if="isLoggedIn && !bookmarksPage"
        @click="goTo('/bookmarks')"
        class="middle-menu-item"
        >Bookmarks</v-toolbar-title
      >
      <v-toolbar-title class="create-btn-section" v-if="isLoggedIn">
        <v-btn outlined class="menu-create-desktop" @click="goTo('/bookmark/create')">create</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title v-if="isLoggedIn" title="Logout">
        <v-icon @click="logout()">logout</v-icon>
      </v-toolbar-title>
    </div>

    <!-- Mobile -->
    <div class="nav-mobile">
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-if="!bookmarksPage">
            <v-list-item-title @click="goTo('/bookmarks')">bookmarks</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('/bookmark/create')">create</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="logout()">logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-icon class="menu-icon-mobile">bookmarks</v-icon>
      <v-toolbar-title class="menu-title-mobile" @click="goTo('/')">Link Bank</v-toolbar-title>
    </div>
  </v-app-bar>
</template>
<script lang="ts" src="./NavBar.ts"></script>
