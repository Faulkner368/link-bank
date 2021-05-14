<template>
  <div class="bookmark-form-section">
    <v-card class="bookmark-form-card">
      <v-card-title>
        <h4>{{ editMode ? "Edit" : "Create" }} Bookmark</h4>
      </v-card-title>
      <v-form class="bookmark-form">
        <v-text-field
          outlined
          name="title"
          label="Title"
          id="title"
          :rules="[validate.required, validate.titleSize]"
          v-model="selectedBookmark.title"
        ></v-text-field>
        <v-textarea
          outlined
          name="description"
          label="Description"
          id="description"
          v-model="selectedBookmark.description"
          :rules="[validate.required, validate.descriptionSize]"
        ></v-textarea>
        <v-text-field
          outlined
          name="url"
          label="Url"
          id="url"
          :rules="[validate.required, validate.isUrl]"
          v-model="selectedBookmark.url"
        ></v-text-field>
        <v-text-field
          outlined
          name="tags"
          label="Tags"
          id="tags"
          :rules="[validate.required, validate.tagSize]"
          v-model="selectedBookmark.tags"
        ></v-text-field>
        <v-overlay :value="isLoading">
          <v-progress-circular
            indeterminate
            color="rgb(240, 42, 115)"
          ></v-progress-circular>
        </v-overlay>
      </v-form>
      <v-card-actions class="bookmark-form-actions">
        <v-btn color="rgb(240, 42, 115)" @click="cancelForm()">cancel</v-btn>
        <v-btn
          v-if="!editMode"
          @click="createBookmark()"
          color="rgb(32, 167, 172)"
          >create</v-btn
        >
        <v-btn v-if="editMode" @click="editBookmark()" color="rgb(32, 167, 172)"
          >edit</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>
<script lang="ts" src="./BookmarkForm.ts"></script>
