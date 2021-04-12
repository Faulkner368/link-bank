<template>
  <v-row no-gutter>
    <v-col cols="6" class="bookmark-form-col">
      <v-card>
        <v-card-title>
          <h4>{{ editMode ? "Edit" : "Create" }} Bookmark</h4>
        </v-card-title>
        <v-form class="bookmark-form">
          <v-text-field
            outlined
            name="title"
            label="Title"
            id="title"
            v-model="bookmark.title"
          ></v-text-field>
          <v-textarea
            outlined
            name="description"
            label="Description"
            id="description"
            v-model="bookmark.description"
          ></v-textarea>
          <v-text-field
            outlined
            name="url"
            label="Url"
            id="url"
            v-model="bookmark.url"
          ></v-text-field>
          <v-text-field
            outlined
            name="tags"
            label="Tags"
            id="tags"
            v-model="bookmark.tags"
          ></v-text-field>
          <v-overlay :value="isSaving">
            <v-progress-circular
              indeterminate
              color="rgb(240, 42, 115)"
            ></v-progress-circular>
          </v-overlay>
        </v-form>
        <v-card-actions class="bookmark-form-actions">
          <v-btn color="grey" :to="{ name: 'Bookmarks' }">cancel</v-btn>
          <v-btn v-if="!editMode" @click="createBookmark()" color="success"
            >create</v-btn
          >
          <v-btn v-if="editMode" @click="editBookmark()" color="success"
            >edit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts" src="./BookmarkForm.ts"></script>
