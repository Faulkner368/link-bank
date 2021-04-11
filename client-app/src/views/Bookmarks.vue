<template>
  <section class="bookmarks">
    <v-card v-for="bookmark in bookmarks" :key="bookmark.id">
      <v-card-title primary-title>
        {{ bookmark.title }}
      </v-card-title>
    </v-card>
  </section>
</template>
<script lang="ts" src="./Bookmarks.ts"></script>