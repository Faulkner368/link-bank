<template>
  <section>
    <v-card
      v-for="bookmark in bookmarks"
      :key="bookmark.id"
      class="bookmark-card"
      elevation="8"
    >
      <v-card-title primary-title>
        <h3>{{ bookmark.title }}</h3>
      </v-card-title>
      <v-card-text>
        <p>{{ bookmark.description }}</p>
        <p>{{ bookmark.url }}</p>
        <p title="Date created in format yyyy-mm-dd">
          Added: {{ bookmark.dateCreated }}
        </p>
      </v-card-text>
      <hr />
      <v-card-actions class="bookmark-card-actions">
        <div class="tags">
          <v-chip>{{ bookmark.tags }}</v-chip>
        </div>
        <div class="bookmark-link-btn">
          <v-btn
            title="delete"
            rounded
            class="bookmark-edit-btn"
            color="error"
            @click="deleteBookmark(bookmark.id)"
            ><v-icon>delete</v-icon></v-btn
          >
          <v-btn
            title="edit"
            rounded
            class="bookmark-edit-btn"
            color="#c4c1bb"
            :to="{ name: 'BookmarkEdit', params: { id: bookmark.id } }"
            ><v-icon>edit</v-icon></v-btn
          >
          <v-btn title="visit" rounded color="success" :href="bookmark.url"
            ><v-icon>launch</v-icon></v-btn
          >
        </div>
      </v-card-actions>
    </v-card>
  </section>
</template>
<script lang="ts" src="./BookmarkCard.ts"></script>
