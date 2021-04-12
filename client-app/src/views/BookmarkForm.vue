<template>
  <v-row no-gutter>
    <v-col cols="6" class="bookmark-form-col">
      <v-card>
        <v-card-title>
          <h4>Add / Edit Bookmark</h4>
        </v-card-title>
        <v-form class="bookmark-form">
          <v-text-field
            outlined
            name="title"
            label="Title"
            id="title"
          ></v-text-field>
          <v-textarea
            outlined
            name="description"
            label="Description"
            id="description"
          ></v-textarea>
          <v-text-field
            outlined
            name="url"
            label="Url"
            id="url"
          ></v-text-field>
          <v-text-field
            outlined
            name="tags"
            label="Tags"
            id="tags"
          ></v-text-field>
          <v-text-field
            outlined
            name="date-created"
            label="Date Created"
            id="date-created"
          ></v-text-field>
        </v-form>
        <v-card-actions class="bookmark-form-actions">
          <v-btn color="grey" :to="{ name: 'Bookmarks' }">cancel</v-btn>
          <v-btn color="success">submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts" src="./BookmarkForm.ts"></script>
