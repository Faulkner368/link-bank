<template>
  <section class="bookmarks">
    <v-row no-gutter>
      <v-col cols="7">
        <v-card v-for="bookmark in bookmarks" :key="bookmark.id" class="bookmark-card" elevation="8">
          <v-card-title primary-title>
            <h3>{{ bookmark.title }}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{ bookmark.description }}</p>
            <p>{{ bookmark.url }}</p>
            <p>Added: {{ processDate(bookmark.dateCreated) }}</p>
          </v-card-text>
          <hr />
        <v-card-actions class="bookmark-card-actions">
          <div class="tags">
            <v-chip>{{ bookmark.tags }}</v-chip>
          </div>
          <div class="bookmark-link-btn">
            <v-btn class="bookmark-edit-btn" color="grey" :to="{ name: 'BookmarkForm', params: { bookmarkId: bookmark.id } }">edit</v-btn>
            <v-btn float color="success" :href="bookmark.url">view</v-btn>
          </div>
        </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card>
          <v-card-title primary-title>
            <h1>Filters</h1>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>
<script lang="ts" src="./Bookmarks.ts"></script>