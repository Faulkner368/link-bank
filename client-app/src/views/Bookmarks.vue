<template>
  <section class="bookmarks-section">
    <div class="bookmark-controls">
      <BookmarkFilter />
      <!-- <BookmarkSort />
      <BookmarkSearch /> -->
    </div>
    <div class="bookmark-list">
      <BookmarkCard v-if="isLoggedIn" />
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
    </div>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate color="white"></v-progress-circular>
    </v-overlay>
  </section>
</template>
<script lang="ts" src="./Bookmarks.ts"></script>