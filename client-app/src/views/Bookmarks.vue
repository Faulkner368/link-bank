<template>
  <section class="bookmarks">
    <v-row no-gutter>
      <v-col cols="7">
        <BookmarkCard />
      </v-col>
      <v-col cols="5">
        <BookmarkFilter />
      </v-col>
    </v-row>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate color="white"></v-progress-circular>
    </v-overlay>
  </section>
</template>
<script lang="ts" src="./Bookmarks.ts"></script>