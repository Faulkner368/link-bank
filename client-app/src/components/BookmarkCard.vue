<template>
  <section>
    <v-card
      v-for="bookmark in bookmarks"
      :key="bookmark.id"
      class="bookmark-card"
      elevation="8"
      height="40"
    >
      <v-app-bar class="bookmark-card-bar" dark height="40" @click="toggleCard($event.currentTarget)">
        <v-card-title primary-title class="bookmark-title">
          <h3 :title="bookmark.title">{{ bookmark.title }}</h3>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-btn @click="deleteBookmark(bookmark.id)" title="delete" fab icon>
          <v-icon>delete</v-icon>
        </v-btn>
        <v-btn
          :to="{ name: 'BookmarkEdit', params: { id: bookmark.id } }"
          title="edit"
          fab
          icon
        >
          <v-icon>edit</v-icon>
        </v-btn>
      </v-app-bar>

      <v-card-text>
        <p class="bookmark-description">{{ bookmark.description }}</p>
        <a :href="bookmark.url" target="_blank" class="bookmark-link">{{ bookmark.url }}</a>
      </v-card-text>
      <hr />
      <v-card-actions class="bookmark-card-actions">
        <div class="tags">
          <v-chip>{{ bookmark.tags }}</v-chip>
        </div>
      </v-card-actions>
    </v-card>
  </section>
</template>
<script lang="ts" src="./BookmarkCard.ts"></script>
