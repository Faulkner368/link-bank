<template>
  <section class="bookmarks">
    <v-row no-gutter>
      <v-col cols="7">
        <BookmarkCard v-if="isLoggedIn" />
        <section v-if="!isLoggedIn">
          <v-card class="not-logged-in" elevation="8">
            <v-card-title primary-title>
              <h1>You are not logged in.</h1>
            </v-card-title>
            <v-card-actions>
              <v-btn color="rgb(32, 167, 172)" :to="{ name: 'HomePage' }"
                >login</v-btn
              >
            </v-card-actions>
          </v-card>
        </section>
        <section v-if="showNoBookmarks">
          <v-card class="not-logged-in" elevation="8">
            <v-card-title primary-title>
              <h1>You have no bookmarks... create one</h1>
            </v-card-title>
            <v-card-actions>
              <v-btn color="rgb(32, 167, 172)" :to="{ name: 'BookmarkCreate' }"
                >create</v-btn
              >
            </v-card-actions>
          </v-card>
        </section>
      </v-col>
      <v-col cols="5">
        <BookmarkFilter />
        <BookmarkSort />
        <BookmarkSearch />
      </v-col>
    </v-row>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate color="white"></v-progress-circular>
    </v-overlay>
  </section>
</template>
<script lang="ts" src="./Bookmarks.ts"></script>